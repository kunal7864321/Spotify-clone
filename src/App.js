import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PlaylistDetail from "./pages/PlaylistDetail";
import ArtistDetail from "./pages/ArtistDetail";
import Library from "./pages/Library";
import LikedSongs from "./pages/LikedSongs";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="app aesthetic-dark-theme">
      <ScrollToTop />
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
            <Route path="/artist/:id" element={<ArtistDetail />} />
            <Route path="/library" element={<Library />} />
            <Route path="/liked" element={<LikedSongs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;