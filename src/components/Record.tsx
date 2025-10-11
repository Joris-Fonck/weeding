import React, { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Record: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [uploading, setUploading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const { toast } = useToast();

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append('audio', audioBlob, `message-${Date.now()}.webm`);
        let url: string = '';
        if (import.meta.env.MODE === 'development') {
          url = 'http://localhost:4000/api/upload-voice';
        } else {
          url = 'https://mariage-jujo.info/api/upload-voice';
        }

        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          toast({
            title: 'Succès',
            description: 'Message envoyé sur Firebase !',
            variant: 'default',
          });
        } else {
          toast({
            title: 'Erreur',
            description: "Erreur lors de l'upload sur le serveur",
            variant: 'destructive',
          });
        }
      } catch {
        toast({
          title: 'Erreur',
          description: "Erreur lors de l'upload sur le serveur",
          variant: 'destructive',
        });
      }
      setUploading(false);
      // Libérer le micro après l'envoi
      if (stream && stream.getTracks) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">Enregistrer un message vocal</h1>
      <Button
        onClick={recording ? stopRecording : startRecording}
        disabled={uploading}
        variant={recording ? 'destructive' : 'default'}
        className="mb-4"
      >
        {recording ? 'Arrêter' : 'Enregistrer'}
      </Button>
      {uploading && <p className="mt-2 text-blue-500">Envoi en cours...</p>}
    </div>
  );
};

export default Record;
