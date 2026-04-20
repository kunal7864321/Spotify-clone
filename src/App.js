import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/library" element={<div>Library</div>} />
        <Route path="/liked" element={<div>Liked Songs</div>} />
        <Route path="/playlist/:id" element={<div>Playlist</div>} />
        <Route path="/artist/:id" element={<div>Artist</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;