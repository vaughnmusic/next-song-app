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

export function getGigById(gigId) {
    return axios.get(`${NEXT_SONG_URL}/gigs/${gigId}`);
};

export function submitNewShow(venue, playlistId) {
    return axios.post(`${NEXT_SONG_URL}/gigs`, {
        location: venue, playlistId
    });
};

export function submitNewRequest(gigId, songId) {
    return axios.post(`${NEXT_SONG_URL}/requests`, { gigId, songId });
};

export function getSongRequests(gigId) {
    // get requests from our api '/api/requests/:gigId'
    return axios.get(`${NEXT_SONG_URL}/requests/${gigId}`)
}

/**
 * 
 * @param {string[]} songIds array of spotify song ids
 * @returns 
 */
export function getTracks(songIds) {
    return axios.get(`${SPOTIFY_URL}/tracks`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        params: { 
            ids: songIds.join()
        }
    });
}
