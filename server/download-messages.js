// Script Node.js pour télécharger tous les messages du bucket GCS
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const fs = require('fs');

// Chemin vers la clé de service
const keyFilename = path.join(__dirname, 'serviceAccountKey.json');
const bucketName = 'weeding-b243d.firebasestorage.app';
const prefix = 'messages/';
const destinationDir = path.join(__dirname, '..', 'messages');

async function downloadMessages() {
  const storage = new Storage({ keyFilename });
  const bucket = storage.bucket(bucketName);

  // Crée le dossier de destination si nécessaire
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  // Liste tous les fichiers sous le préfixe 'messages/'
  const [files] = await bucket.getFiles({ prefix });
  if (files.length === 0) {
    console.log('Aucun message trouvé dans le bucket.');
    return;
  }

  for (const file of files) {
    // Ignore les dossiers
    if (file.name.endsWith('/')) continue;
    const destPath = path.join(destinationDir, path.basename(file.name));
    await file.download({ destination: destPath });
    console.log(`Téléchargé : ${file.name} -> ${destPath}`);
  }
  console.log('Tous les messages ont été téléchargés !');
}

// Exécution

if (require.main === module) {
  downloadMessages().catch(err => {
    console.error('Erreur lors du téléchargement :', err.message);
    process.exit(1);
  });
}
