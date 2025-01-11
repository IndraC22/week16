import React from 'react';
import { Song } from './App';
import ArtistCard from './ArtistCard';

interface ListProps {
  songs: Song[];
  onDelete: (id: number) => void;
  onEdit: (song: Song) => void;
}

const List: React.FC<ListProps> = ({ songs, onDelete, onEdit }) => {
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          <ArtistCard song={song} />
          <button onClick={() => onEdit(song)}>Edit</button>
          <button onClick={() => onDelete(song.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;