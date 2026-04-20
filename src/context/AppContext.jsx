import {createContext, useState } from "react";
import { SONGS } from "../data/data";
export const AppContext = createContext();

export const AppProvider =({children}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

     const createPlaylist = (name) => {
        const newPlaylist = {
            id:`p${userPlaylists.length + 9}`,
            name: name,
            description: "",
            image:"",
            songs:[],
        };
        setUserPlaylists(prev => [...prev, newPlaylist]);
     };

     const getSearchResults = (query) => {
        return SONGS.filter(song =>

            song.title.toLowerCase().includes(query.toLowerCase())
        );
        
     };









    return (
        <AppContext.Provider value={{
            searchQuery,
            setSearchQuery,
            userPlaylists,
            sidebarCollapsed,
            setSidebarCollapsed,
            createPlaylist,
            getSearchResults,  }}>{children}</AppContext.Provider>
    );


};