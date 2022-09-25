import axios from 'axios'
const SPOTIFY_URL = `https://api.spotify.com/v1`;
const NEXT_SONG_URL = 'http://localhost:8080/api';
// import { getUsersPlaylists } from ''


function getToken() {
    return localStorage.getItem('token');
}

export function getPlaylist(playlistId) {
    return axios.get(`${SPOTIFY_URL}/playlists/${playlistId}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

export function getPlaylistSongs(playlistId) {
    return axios.get(`${SPOTIFY_URL}/playlists/${playlistId}/tracks`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}
export function getCurrentUsersPlaylists() {
    return axios.get(`${SPOTIFY_URL}/me/playlists`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

export function getUsersPlaylists(userId) {
    return axios.get(`${SPOTIFY_URL}users/${userId}/playlists`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

export function searchArtists(artistQ) {
    return axios.get(`${SPOTIFY_URL}/search`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        params: {
            q: artistQ,
            type: 'artist'
        }
    });
}

export function submitNewShow(venue, playlistId) {
    return axios.post(`${NEXT_SONG_URL}/gigs`, {
        location: venue, playlistId
    });
};

// this is not completely correct
export function submitNewRequest(gigId, songId) {
    return axios.post(`${NEXT_SONG_URL}/request`, {
        gigId, songId
    });
};

