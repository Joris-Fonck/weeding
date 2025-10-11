const express = require('express');
const cors = require('cors');
const multer = require('multer');

const admin = require('firebase-admin');
const crypto = require('node:crypto');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

const app = express();
app.use(cors());
const upload = multer();


const path = require('path');
const fs = require('fs');

async function initializeFirebase() {
  try {
    let serviceAccount;
    if (process.env.NODE_ENV === 'production') {
      const [version] = await client.accessSecretVersion({
        name: 'projects/224365870780/secrets/firebase-service-account/versions/latest',
      });
      serviceAccount = JSON.parse(version.payload.data.toString());
      console.log('Firebase initialisé avec la clé du Secret Manager.');
    } else {
      // Utilisation du fichier local en développement
      const keyPath = path.join(__dirname, 'serviceAccountKey.json');
      serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
      console.log('Firebase initialisé avec la clé locale.');
    }
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: 'weeding-b243d.firebasestorage.app',
    });
    global.bucket = admin.storage().bucket();
  } catch (err) {
    console.error('Erreur lors de la récupération du service account:', err);
    process.exit(1);
  }
}

initializeFirebase();

app.post('/api/upload-voice', upload.single('audio'), async (req, res) => {
  try {
    // Autoriser uniquement le 30 et 31 mai 2026
    const now = new Date();
    const allowedDates = [
      new Date('2026-05-30'),
      new Date('2026-05-31'),
    ];
    const isAllowed = allowedDates.some(date =>
      now.getUTCFullYear() === date.getUTCFullYear() &&
      now.getUTCMonth() === date.getUTCMonth() &&
      now.getUTCDate() === date.getUTCDate()
    );
    if (process.env.NODE_ENV === 'production' && !isAllowed) {
      return res.status(403).json({ success: false, error: "L'upload n'est autorisé que le 30 et 31 mai 2026." });
    }

    const audioBuffer = req.file.buffer;
    const fileName = `messages/message-${crypto.randomUUID()}.webm`;
    const file = bucket.file(fileName);
    await file.save(audioBuffer, {
      contentType: 'audio/webm',
      public: false,
    });
    res.json({ success: true, message: 'Upload réussi !' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(4000, () => {
  console.log('Serveur Express démarré sur le port 4000');
});
