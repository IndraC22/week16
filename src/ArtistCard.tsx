import React from 'react';
import { Song } from './App';

interface ArtistCardProps {
  song: Song;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ song }) => {
  return (
    <div>
      <img src={song.imageUrl} alt={song.artist} style={{ width: '100px', height: '100px' }} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default ArtistCard;
