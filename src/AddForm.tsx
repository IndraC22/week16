import React, { useState } from 'react';
import { Song } from './App';
import artistImageMap from './ArtistImageMap';



interface AddFormProps {
  onAdd: (song: Song) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imageUrl = artistImageMap[artist] || 'https://img.freepik.com/premium-vector/music-playlist-icon-vector-designx9_810420-2878.jpg?w=360';
    const newSong: Song = {
      id: Date.now(),
      title,
      artist,
      imageUrl,
    };
    onAdd(newSong);
    setTitle('');
    setArtist('');
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
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddForm;