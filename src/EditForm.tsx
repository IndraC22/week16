import React, { useState } from 'react';
import { Song } from './App';
import artistImageMap from './ArtistImageMap';


interface EditFormProps {
  song: Song;
  onUpdate: (song: Song) => void;
}

const EditForm: React.FC<EditFormProps> = ({ song, onUpdate }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imageUrl = artistImageMap[artist] || song.imageUrl;
    onUpdate({ ...song, title, artist, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <button type="submit">Update Song</button>
    </form>
  );
};

export default EditForm;
