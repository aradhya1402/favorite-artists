import { useState, useEffect } from "react"
import { API_BASE_URL } from "../../config/config";
import axios from 'axios';
import { getCookie } from "../../utils/cookieutils";
import './ArtistList.css'


export const ArtistList = () => {
    const [artistList, setArtistList] = useState([]);
    const [songList, setSongList] = useState([]);
    const [artistName, setArtistName]=useState('');
    const [songName,setSongName]=useState('');
    useEffect(() => {
        getArtistList();
        getSongs();

    },[])
    const addArtist = async () => {
        const csrftoken = getCookie('csrftoken');
        if(!artistName.trim() || !songName.trim()) {
            alert("Entering both the artist and song is necessary");
            return;
        }
        try {
            const artistResponse = await axios.post(`${API_BASE_URL}/artists/`, {
                name: artistName
            }, {
                headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            });
            if (artistResponse.status === 201) {
                console.log("Artist added ", artistResponse.data);
                setArtistList(prevArtists=>[...prevArtists, artistResponse.data])
                setArtistName('')
            }

            const songResponse = await axios.post(`${API_BASE_URL}/songs/`, {
                artist:artistResponse.data.id,
                title: songName
            }, {
                headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            })
            if (songResponse.status === 201) {
                console.log("Song added ", songResponse.data);
                setSongList(prevSongs=>[...prevSongs, songResponse.data])
                setSongName('')
            }
        }
        catch (error) {
            console.log("Error: ", error.message);
        }
    }
   
    const getArtistList = async () => {
        const csrftoken = getCookie('csrftoken');
        try {
            const response = await axios.get(`${API_BASE_URL}/artists`, {
                headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            });
            if (response.status === 200) {
                setArtistList(response.data)
                console.log(artistList)
            }
        }
        catch (error) {
            console.error("error", error.message);
        }
    }
    const getSongs = async () => {
        const csrftoken = getCookie('csrftoken');
        try {
            const response = await axios.get(`${API_BASE_URL}/songs`, {
                headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            });
            if (response.status === 200) {
                setSongList(response.data)
                console.log(songList)
            }
        }
        catch (error) {
            console.error("error", error.message);
        }
    }
    const removeArtist =async(artistId)=>{
        const csrftoken = getCookie('csrftoken');
       
        try {
            const response = await axios.delete(`${API_BASE_URL}/artists/${artistId}/`, {
                name: artistName
            }, {
                headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            })
            if (response.status === 204) {
                console.log("Artist removed ", response.data);
                setArtistList(prevArtists=> prevArtists.filter(artist=>artist.id!==artistId))
                setSongList(prevSongs=>prevSongs.filter(song=>song.artist!==artistId))
            }
        }
        catch (error) {
            console.log("Error: ", error.message);
        }
    }

    return (
        <div>
            <h1>Welcome to the Artist List!</h1>
            <h3>Please add your favourite artist and songs to this list</h3>
            
            <input type="text" onChange={(e) => setArtistName(e.target.value)} placeholder="Type Artist Name..." className="add-fields" value={artistName}></input>
            <input type="text" onChange={(e) => setSongName(e.target.value)} placeholder="Type Song Name..." className="add-fields" value={songName}></input>
            <div className="song-and-artist">
            <div className="list-container">
            {artistList.length>0 && artistList.map((item) => (

                <div key={item.id} className="button-and-artist-name">
                    <button className="remove-button" onClick={()=>removeArtist(item.id)}>Remove Artist</button>
                    <div>{item.name}</div>
                </div>
               

            ))}
            
            </div>
            <div className="list-container">
            {songList.length>0 && songList.map((item, index) => (
                <div className="song" key={item.id}>
                    <div>{item.title}</div>
                </div>

            ))}
            </div>
            
            </div>
            <button className="add-artist-and-song-btn" onClick={() => addArtist()}>Add Artist and Song</button>
           
          
           
        </div>
    )

}

