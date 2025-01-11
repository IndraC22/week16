import React, { useState } from 'react';
import AddForm from './AddForm';
import List from './List';
import EditForm from './EditForm';
import './App.css';


export interface Song {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

const App: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  const addSong = (newSong: Song) => {
    setSongs([...songs, newSong]);
  };

  const deleteSong = (id: number) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const updateSong = (updatedSong: Song) => {
    setSongs(songs.map(song => (song.id === updatedSong.id ? updatedSong : song)));
    setEditingSong(null);
  };

  return (
    <div>
      <h1>Indra's Playlist</h1>
      {editingSong ? (
        <EditForm song={editingSong} onUpdate={updateSong} />
      ) : (
        <AddForm onAdd={addSong} />
      )}
      <List songs={songs} onDelete={deleteSong} onEdit={setEditingSong} />
    </div>
  );
};

export default App;