
const access_token; // get the access token here from app.js

// use: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists


// Retrieve playlist items from spotify using a specified id
export function getPlaylistItems(playlist_id) {
    fetch('https://api.spotify.com/v1/playlists/%s/tracks', playlist_id, {
        headers: {
            'Authorization' : 'Bearer ' + access_token
        }
    }).then((response) => {
        response.json();
    });
}