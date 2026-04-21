import { createContext, useState, useRef, useEffect, useCallback } from "react";
export const PlayerContext =createContext();
 export const PlayerProvider = ({children}) => {
      const [currentSong, setCurrentSong] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const [progress, setProgress] = useState(0);
      const [volume, setVolume] = useState(80);
      const [queue, setQueue] = useState([]);
      const [likedSongs, setLikedSongs] = useState(new Set());
      const [duration, setDuration] = useState(0);

      const audioRef = useRef(null);
      const progressIntervalRef = useRef(null);

      useEffect(() => {
        if (!audioRef.current) {
          audioRef.current = new Audio();
          audioRef.current.volume = volume / 100;
        }
        return () => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
          }
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
        };
      }, []);

      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume / 100;
        }
      }, [volume]);

      useEffect(() => {
        if (audioRef.current && currentSong) {
          const audio = audioRef.current;
          
          if (isPlaying) {
            audio.play().catch(() => {});
            progressIntervalRef.current = setInterval(() => {
              if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
              }
            }, 1000);
          } else {
            audio.pause();
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
          }
        }
      }, [isPlaying, currentSong]);

      useEffect(() => {
        if (audioRef.current && currentSong) {
          const audio = audioRef.current;
          audio.src = currentSong.audioUrl || "";
          
          const handleLoadedMetadata = () => {
            setDuration(audio.duration);
          };
          
          const handleEnded = () => {
            if (queue.length > 0) {
              skipNext();
            } else {
              setIsPlaying(false);
              setProgress(0);
            }
          };

          audio.addEventListener('loadedmetadata', handleLoadedMetadata);
          audio.addEventListener('ended', handleEnded);
          
          if (isPlaying) {
            audio.play().catch(() => {});
          }
          
          return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
          };
        }
      }, [currentSong]);

      useEffect(() => {
        if (audioRef.current && currentSong) {
          const audio = audioRef.current;
          audio.currentTime = (progress / 100) * duration;
        }
      }, [progress]);

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

      const skipNext = useCallback(() => {
        if (queue.length === 0) return;
        const nextSong = queue[0];
        setQueue(prev => prev.slice(1));
        setCurrentSong(nextSong);
        setIsPlaying(true);
        setProgress(0);
      }, [queue]);

      const skipPrevious = useCallback(() => {
        if (audioRef.current && audioRef.current.currentTime > 3) {
          audioRef.current.currentTime = 0;
          setProgress(0);
        }
      }, []);

      const setPlayerVolume = (vol) =>{
        setVolume(vol);
      }

      const seekTo = (percent) => {
        setProgress(percent);
        if (audioRef.current && duration) {
          audioRef.current.currentTime = (percent / 100) * duration;
        }
      };
    return (
        <PlayerContext.Provider value={{
            currentSong,
            isPlaying,
            progress,
            setProgress: seekTo,
            volume,
            queue,
            setQueue,
            likedSongs,
            playSong,
            togglePlay,
            toggleLike,
            skipNext,
            skipPrevious,
            setPlayerVolume,
            duration,

       }}>{children}</PlayerContext.Provider>
    );


  };