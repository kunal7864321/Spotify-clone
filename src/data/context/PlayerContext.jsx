import { createContext, useState, useRef } from "react";
export const PlayerContext =createContext();
 export const PlayerProvider = ({children}) => {
      const [currentSong, setCurrentSong] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const [progress, setProgress] = useState(0);
      const [volume, setVolume] = useState(80);
      const [queue, setQueue] = useState([]);
      const [likedSongs, setLikedSongs] = useState(new Set());

      const intervalRef = useRef(null)

      const playSong = (song) =>{
        setCurrentSong(song);
        setIsPlaying(true);
        setProgress(0);
      };
      const togglePlay = () =>{
        setIsPlaying ((prev) => !prev);
      };

      const toggleLike = (songId) => {
        setLikedSongs (prev => {

            const updated = new Set(prev);
            if (updated.has(songId)){
                updated.delete(songId);
            }else{
                updated.add(songId);
            }
            return updated;


        });
      };

      const skipNext = () => {
        if (queue.length === 0) return;
        const nextSong = queue [0];
        setQueue (prev => prev.slice(1));
        playSong(nextSong);
      };

      const setPlayerVolume = (vol) =>{
        setVolume(vol);

      }
       






    return (
        <PlayerContext.Provider value={{
            currentSong,
            isPlaying,
            progress,
            setProgress,
            volume,
            queue,
            setQueue,
            likedSongs,
            playSong,
            togglePlay,
            toggleLike,
            skipNext,
            setPlayerVolume,

       }}>{children}</PlayerContext.Provider>
    );


 };