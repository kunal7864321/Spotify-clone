export const ARTISTS = [
    {
        id:"a1",
        name:"Arijit Singh",
        image:"https://picsum.photos/seed/arijit/300/300",
        monthlyListeners:"50M",
        genres:["Bollywood", "Romantic", "Pop"],
    },
    {
        id:"a2",
        name:"A.R. Rahman",
        image:"https://picsum.photos/seed/rahman/300/300",
        monthlyListeners:"40M",
        genres:["Bollywood", "Pop", "Classical"],
    },
    {
        id:"a3",
        name:"Shreya Ghoshal",
        image:"https://picsum.photos/seed/shreya/300/300",
        monthlyListeners:"40M",
        genres:["Bollywood", "Pop", "Classical","Romantic"],


    },
    {
        id:"a4",
        name:"Sonu Nigam",
        image:"https://picsum.photos/seed/sonu/300/300",
        monthlyListeners:"29M",
        genres:["Romantic", "Bollywood", "Pop"],
    },
    {
        id:"a5",
        name:"Jubin Nautiyal",
        image:"https://picsum.photos/seed/jubin/300/300",
        monthlyListeners:"25M",
        genres:["Bollywood", "Romantic", "Pop"],
    },
    {
        id:"a6",
        name:"Neha Kakkar",
        image:"https://picsum.photos/seed/neha/300/300",
        monthlyListeners:"20M",
        genres:["Bollywood", "Pop", "Romantic"],        
    },
    {
        id:"a7",
        name:"Badshah",
        image:"https://picsum.photos/seed/badshah/300/300",
        monthlyListeners:"15M",
        genres:["Bollywood", "Pop", "Hip-Hop"],

    },
    {
        id:"a8",
        name:"Guru Randhawa",
        image:"https://picsum.photos/seed/guru/300/300",
        monthlyListeners:"10M",
        genres:["Bollywood", "Pop", "Romantic"],

    },
    {
        
        id:"a9",
        name:"Atif Aslam",
        image:"https://picsum.photos/seed/atif/300/300",
        monthlyListeners:"8M",
        genres:["Bollywood", "Romantic", "Pop"],
    }
]

export const ALBUMS = [
    {
        id:"al1",
        name:"Best of Arijit Singh",
        artistId:"a1",
        artistName:"Arijit Singh",
        image:"https://picsum.photos/seed/album1/300/300",
        year: 2020,
        songs:[]
    },

    {
        id:"al2",
        name:"Best of A.R. Rahman",
        artistId:"a2",
        artistName:"A.R. Rahman",
        image:"https://picsum.photos/seed/album2/300/300",
        year: 2019,
        songs:[]
    },
    {
        id:"al3",
        name:"Best of Shreya Ghoshal",
        artistId:"a3",
        artistName:"Shreya Ghoshal",
        image:"https://picsum.photos/seed/album3/300/300",
        year: 2018,
        songs:[]
    },
    {
        id:"al4",
        name:"Best of Sonu Nigam",
        artistId:"a4",
        artistName:"Sonu Nigam",
        image:"https://picsum.photos/seed/album4/300/300",
        year: 2017,
        songs:[]
    },
    {
        id:"al5",
        name:"Jubin Nautiyal Hits",
        artistId:"a5",
        artistName:"Jubin Nautiyal",
        image:"https://picsum.photos/seed/album5/300/300",
        year: 2016,
        songs:[]
    },
    {id:"al6",
        name:"Neha Kakkar Hits",
        artistId:"a6",
        artistName:"Neha Kakkar",
        image:"https://picsum.photos/seed/album6/300/300",
        year: 2015,
        songs:[]
    },
    {
        id:"al7",
        name:"Badshah Hits",
        artistId:"a7",
        artistName:"Badshah",
        image:"https://picsum.photos/seed/album7/300/300",
        year: 2014,
        songs:[]
    },
    {
        id:"al8",
        name:"Guru Randhawa Hits",
        artistId:"a8",
        artistName:"Guru Randhawa",
        image:"https://picsum.photos/seed/album8/300/300",
        year: 2013,
        songs:[]
    },
    {
        id:"al9",
        name:"Atif Aslam Hits",
        artistId:"a9",
        artistName:"Atif Aslam",
        image:"https://picsum.photos/seed/album9/300/300",
        year: 2012,
        songs:[]
    }

    
    
];
export const SONGS = [
    {
    id: "s1",
    title: "Tum Hi Ho",
    artistId: "a1",
    artistName: "Arijit Singh",
    albumId: "al1",
    albumName: "Best of Arijit Singh",
    duration: "4:21",    
    image: "https://picsum.photos/seed/song1/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "s2",
    title: "Channa Mereya",
    artistId: "a1",
    artistName: "Arijit Singh",
    albumId: "al1",
    albumName: "Best of Arijit Singh",
    duration: "4:56",    
    image: "https://picsum.photos/seed/song2/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "s3",
    title: "Raabta",
    artistId: "a1",
    artistName: "Arijit Singh",
    albumId: "al1",
    albumName: "Best of Arijit Singh",
    duration: "4:12",    
    image: "https://picsum.photos/seed/song3/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "s4",
    title: "Agar Tum Saath Ho",
    artistId: "a1",
    artistName: "Arijit Singh",
    albumId: "al1",
    albumName: "Best of Arijit Singh",
    duration: "4:45",    
    image: "https://picsum.photos/seed/song4/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "s5",
    title: "Jai Ho",
    artistId: "a2",
    artistName: "A.R. Rahman",
    albumId: "al2",
    albumName: "Best of A.R. Rahman",
    duration: "5:00",    
    image: "https://picsum.photos/seed/song5/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: "s6",
    title: "Chaiyya Chaiyya",
    artistId: "a2",
    artistName: "A.R. Rahman",
    albumId: "al2",
    albumName: "Best of A.R. Rahman",
    duration: "4:30",    
    image: "https://picsum.photos/seed/song6/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: "s7",
    title: "Tere Bina",
    artistId: "a2",
    artistName: "A.R. Rahman",
    albumId: "al2",
    albumName: "Best of A.R. Rahman",
    duration: "4:15",    
    image: "https://picsum.photos/seed/song7/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id:"s8",
    title:"Teri meri",
    artistId:"a3",
    artistName:"Shreya Ghoshal",
    albumId:"al3",
    albumName:"Best of Shreya Ghoshal",
    duration:"4:20",
    image:"https://picsum.photos/seed/song8/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id:"s9",
    title:"Sun Raha Hai",
    artistId:"a3",
    artistName:"Shreya Ghoshal",
    albumId:"al3",
    albumName:"Best of Shreya Ghoshal",
    duration:"4:25",
    image:"https://picsum.photos/seed/song9/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
},
{
    id:"s10",
    title:"Ishq Shayari",
    artistId:"a3",
    artistName:"Shreya Ghoshal",
    albumId:"al3",
    albumName:"Best of Shreya Ghoshal",
    duration:"3:04",
    image:"https://picsum.photos/seed/song10/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",

},
{
    id:"s11",
    title:"Kal ho naa ho",
    artistId:"a4",
    artistName:"Sonu Nigam",
    albumId:"al4",
    albumName:"Best of Sonu Nigam",
    duration:"4:50",
    image:"https://picsum.photos/seed/song11/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
},
{
    id:"s12",
    title:"Abhi Mujh Mein Kahin",
    artistId:"a4",
    artistName:"Sonu Nigam",
    albumId:"al4",
    albumName:"Best of Sonu Nigam",
    duration:"5:10",
    image:"https://picsum.photos/seed/song12/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",        

},
{
    id:"s13",
    title:"Suraj Hua Maddham",
    artistId:"a4",
    artistName:"Sonu Nigam",
    albumId:"al4",
    albumName:"Best of Sonu Nigam",
    duration:"4:40",
    image:"https://picsum.photos/seed/song13/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
},
{
    id:"s14",
    title:"Lut Gaye",
    artistId:"a5",
    artistName:"Jubin Nautiyal",
    albumId:"al5",
    albumName:"Jubin Nautiyal Hits",
    duration:"4:30",
    image:"https://picsum.photos/seed/song14/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
},
{
    id:"s15",
    title:"Kinna Sona",
    artistId:"a5",
    artistName:"Jubin Nautiyal",
    albumId:"al5",
    albumName:"Jubin Nautiyal Hits",
    duration:"4:00",
    image:"https://picsum.photos/seed/song15/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
},
{
    id:"s16",
    title:"Tujhe Kitna Chahne Lage",
    artistId:"a5",
    artistName:"Jubin Nautiyal",
    albumId:"al5",
    albumName:"Jubin Nautiyal Hits",
    duration:"4:45",
    image:"https://picsum.photos/seed/song16/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
},
{
    id:"s17",
    title:"Dilbar",
    artistId:"a6",
    artistName:"Neha Kakkar",
    albumId:"al6",   
    albumName:"Neha Kakkar Hits",
    duration:"3:50",
    image:"https://picsum.photos/seed/song17/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
},
{
    id:"s18",
    title:"Aankh Marey",
    artistId:"a6",
    artistName:"Neha Kakkar",
    albumId:"al6",   
    albumName:"Neha Kakkar Hits",
    duration:"3:30",
    image:"https://picsum.photos/seed/song18/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
},
{
    id:"s19",
    title:"O Saki Saki",
    artistId:"a6",
    artistName:"Neha Kakkar",
    albumId:"al6",   
    albumName:"Neha Kakkar Hits",
    duration:"4:00",
    image:"https://picsum.photos/seed/song19/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",

},
{
    id:"s20",
    title:"pagaal",
    artistId:"a7",
    artistName:"Badshah",
    albumId:"al7",   
    albumName:"Badshah Hits",
    duration:"3:40",
    image:"https://picsum.photos/seed/song20/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
},
{
    id:"s21",
    title:"DJ Waley Babu",
    artistId:"a7",
    artistName:"Badshah",
    albumId:"al7",   
    albumName:"Badshah Hits",
    duration:"3:20",
    image:"https://picsum.photos/seed/song21/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
},
{
    id:"s22",
    title:"Genda Phool",
    artistId:"a7",
    artistName:"Badshah",
    albumId:"al7",   
    albumName:"Badshah Hits",
    duration:"4:10",
    image:"https://picsum.photos/seed/song22/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
},

]
export const PLAYLISTS = [
  {
    id: "p1",
    name: "Bollywood Hits",
    description: "Best of Bollywood all time",
    image: "https://picsum.photos/seed/playlist1/300/300",
    songs: ["s1", "s2", "s3", "s4", "s5"],
  },
  {
    id: "p2",
    name: "Romantic Vibes",
    description: "Perfect songs for a romantic evening",
    image: "https://picsum.photos/seed/playlist2/300/300",
    songs: ["s1", "s3", "s8", "s11", "s14", "s16"],
  },
  {
    id: "p3",
    name: "AR Rahman Classics",
    description: "Timeless hits by the Mozart of Madras",
    image: "https://picsum.photos/seed/playlist3/300/300",
    songs: ["s5", "s6", "s7"],
  },
  {
    id: "p4",
    name: "Party Songs",
    description: "Get the party started",
    image: "https://picsum.photos/seed/playlist4/300/300",
    songs: ["s17", "s18", "s19", "s20", "s21", "s22"],
  },
  {
    id: "p5",
    name: "Shreya Specials",
    description: "Melodious hits by Shreya Ghoshal",
    image: "https://picsum.photos/seed/playlist5/300/300",
    songs: ["s8", "s9", "s10"],
  },
  {
    id: "p6",
    name: "90s Nostalgia",
    description: "Throwback to the golden era",
    image: "https://picsum.photos/seed/playlist6/300/300",
    songs: ["s11", "s12", "s13", "s6", "s7"],
  },
  {
    id: "p7",
    name: "Morning Motivation",
    description: "Start your day right",
    image: "https://picsum.photos/seed/playlist7/300/300",
    songs: ["s5", "s14", "s15", "s1", "s20"],
  },
  {
    id: "p8",
    name: "Arijit Singh Best",
    description: "Top tracks by Arijit Singh",
    image: "https://picsum.photos/seed/playlist8/300/300",
    songs: ["s1", "s2", "s3", "s4"],
  },
];

export const getSongById = (id) => {
    return SONGS.find((song)=> song.id === id);
};

export const getArtistById = (id) => {
  return ARTISTS.find((artist) => artist.id === id);
};

export const getSongsByArtist = (artistId) => {
  return SONGS.filter((song) => song.artistId === artistId);
};

export const getSongsByAlbum = (albumId) => {
  return SONGS.filter((song) => song.albumId   === albumId);
};
