# Spotify Clone - Project Documentation

## Project Overview

**Project Name:** Spotify Clone  
**Type:** Web Application (Music Streaming Platform)  
**Live URL:** https://stately-frangollo-a323ac.netlify.app  
**GitHub Repository:** https://github.com/kunal7864321/Spotify-clone

---

## 1. Introduction

This is a functional music streaming web application inspired by Spotify, built using React.js. The application allows users to browse musicians, albums, and playlists, play music with full playback controls, and manage their favorite songs.

### Key Features
- Browse artists, albums, and playlists
- Play music with play/pause/skip controls
- Progress bar with seeking capability
- Volume control
- Like/favorite songs functionality
- Search functionality
- Responsive dark-themed UI

---

## 2. Technology Stack

| Technology | Purpose |
|------------|---------|
| React.js (18.x) | Frontend framework |
| React Router (v6) | Client-side routing |
| Context API | Global state management |
| HTML5 Audio API | Music playback |
| CSS3 | Styling with CSS variables |
| Netlify | Cloud deployment |

---

## 3. Project Structure

```
Spotify-clone/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── ArtistCard.jsx      # Artist display card
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   ├── Playerbar.jsx        # Music player controls
│   │   ├── PlaylistCard.jsx     # Playlist display card
│   │   ├── SearchBar.jsx       # Search input
│   │   ├── Sidebar.jsx        # Side navigation
│   │   ├── SongRow.jsx        # Individual song item
│   │   └── Playerbar.css      # Player styling
│   ├── context/
│   │   ├── AppContext.jsx      # Application state
│   │   └── PlayerContext.jsx   # Audio playback state
│   ├── data/
│   │   └── data.js            # Static data (artists, albums, songs)
│   ├── pages/
│   │   ├── Home.jsx           # Main landing page
│   │   ├── Search.jsx         # Search functionality
│   │   ├── Library.jsx        # User library
│   │   ├── PlaylistDetail.jsx # Playlist details
│   │   ├── ArtistDetail.jsx   # Artist details
│   │   └── LikedSongs.jsx     # Liked songs list
│   ├── App.js                 # Main app component
│   ├── index.css              # Global styles
│   └── index.js               # Entry point
└── package.json
```

---

## 4. Architecture

### 4.1 State Management

The application uses React's Context API for state management:

**PlayerContext**
- `currentSong`: Currently playing song object
- `isPlaying`: Boolean (play/pause state)
- `progress`: Playback progress (0-100)
- `volume`: Volume level (0-100)
- `queue`: Upcoming songs
- `likedSongs`: Set of liked song IDs
- Functions: `playSong()`, `togglePlay()`, `skipNext()`, `skipPrevious()`, `toggleLike()`

**AppContext**
- `searchQuery`: Current search text
- `userPlaylists`: User-created playlists

### 4.2 Audio Playback System

The application uses HTML5 Audio API for music playback:

```javascript
// PlayerContext.jsx - Key Implementation
const audioRef = useRef(null);

useEffect(() => {
  if (audioRef.current && currentSong) {
    audioRef.current.src = currentSong.audioUrl;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }
}, [currentSong, isPlaying]);

// Progress tracking
useEffect(() => {
  if (audioRef.current && isPlaying) {
    progressIntervalRef.current = setInterval(() => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    }, 1000);
  }
}, [isPlaying]);
```

### 4.3 Routing

React Router handles navigation between pages:

| Route | Page |
|-------|------|
| `/` | Home |
| `/search` | Search |
| `/library` | Library |
| `/playlist/:id` | Playlist Detail |
| `/artist/:id` | Artist Detail |
| `/liked` | Liked Songs |

---

## 5. Features Implementation

### 5.1 Music Browser
- Display artists with profile images and genres
- Show albums with cover art and release year
- List songs with duration and album info
- Playlist management with cards

### 5.2 Audio Player
- Play/Pause toggle button
- Previous/Next track navigation
- Progress bar with seek functionality
- Volume control slider
- Current time and duration display

### 5.3 User Interactions
- Single-click on song to play
- Like/unlike songs with heart button
- Create new playlists
- Search songs by title

### 5.4 UI/UX
- Dark theme (Spotify-inspired color palette)
- Doodly animated waveform (plays when music is active)
- Responsive design for different screen sizes
- Smooth transitions and hover effects

---

## 6. Data Structure

### Sample Data Format

```javascript
// Artist
{
  id: "a1",
  name: "Arijit Singh",
  image: "https://picsum.photos/seed/arijit/300/300",
  monthlyListeners: "50M",
  genres: ["Bollywood", "Romantic", "Pop"]
}

// Album
{
  id: "al1",
  name: "Best of Arijit Singh",
  artistId: "a1",
  artistName: "Arijit Singh",
  image: "https://picsum.photos/seed/album1/300/300",
  year: 2020
}

// Song
{
  id: "s1",
  title: "Tum Hi Ho",
  artistId: "a1",
  artistName: "Arijit Singh",
  albumId: "al1",
  albumName: "Best of Arijit Singh",
  duration: "4:21",
  image: "https://picsum.photos/seed/song1/300/300",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}
```

---

## 7. Build & Deployment

### 7.1 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
# Runs at http://localhost:3000
```

### 7.2 Production Build

```bash
# Create optimized build
npm run build
# Output in /build folder
```

### 7.3 Deployment

```bash
# Deploy to Netlify
npx netlify deploy --dir=build --prod

# Live URL: https://stately-frangollo-a323ac.netlify.app
```

---

## 8. Expected Questions & Answers

### Q1: How does audio playback work?
Uses HTML5 Audio API with React refs. The Audio object loads the song URL from `audioUrl` field and `.play()` method starts playback. Progress is tracked using `setInterval`.

### Q2: Why use Context API instead of Redux?
Context API is React's built-in solution. It's simpler for this project size and sufficient for global state needs without additional dependencies or boilerplate code.

### Q3: How is the progress bar implemented?
A `setInterval` runs every second while music plays. Progress is calculated as: `(currentTime / duration) * 100`. Dragging the slider adjusts `audio.currentTime`.

### Q4: What is the doodly theme?
An animated green waveform bar at the player bottom created using CSS keyframe animations. It appears when music is playing with gradient colors and pulsing glow effects.

### Q5: How do you handle navigation between pages?
React Router's `<Routes>` component in App.js maps URL paths to corresponding page components. The `<Link>` component is used for navigation.

### Q6: How are liked songs stored and persisted?
JavaScript Set stores liked song IDs. The `toggleLike()` function adds or removes IDs from the set. The UI updates based on whether the ID exists in the set.

### Q7: What challenges were faced during development?
- Finding working audio sample URLs (used SoundHelix test MP3s)
- Netlify CLI authentication issues
- Image URL reliability (solved using Picsum placeholder service)

### Q8: How does the player bar handle different screen sizes?
CSS media queries hide the center controls and volume slider on mobile devices (max-width: 768px), showing only essential info.

### Q9: What is the purpose of useEffect hook?
`useEffect` handles side effects in React - in this project: setting up the Audio object, responding to play/pause state changes, managing the progress interval, and cleanup on unmount.

### Q10: How is the theme/colors managed?
CSS custom properties (variables) in `index.css` define the color palette. The `--color-green` variable (#1db954) is used for Spotify-like branding.

---

## 9. Future Enhancements

1. Integrate with Spotify API for real music data
2. User authentication system
3. Create/edit/delete playlists functionality
4. Shuffle and repeat modes
5. Keyboard shortcuts for player control
6. Lyrics display feature
7. Recently played history

---

## 10. Conclusion

This Spotify Clone project demonstrates:
- Proficiency in React.js fundamentals
- Context API for state management
- HTML5 Audio API integration for media playback
- Responsive UI design with modern CSS3
- Theming with CSS variables
- Deployment to cloud platforms (Netlify)

The application is fully functional and deployed at:
**https://stately-frangollo-a323ac.netlify.app**

---

*Project submitted for examination*
*Developer: Kunal Kumar Jha*
*Date: April 2026*