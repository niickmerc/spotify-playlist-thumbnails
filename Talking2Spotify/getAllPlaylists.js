/*
      /\
     /  \
____/    \____
\            /
 \/        \/
 /          \
/    /\/\    \

*/


const access_token; // get the access token here from app.js

// use: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists

// Retrieve all playlists from spotify - should we parse though to retrive list of names? 
export function getAllPlaylists() {
    fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            'Authorization' : 'Bearer ' + access_token
        }
    }).then((response) => {
        response.json();
    });
}

export async function getHREFtoTracks() {
    fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            'Authorization' : 'Bearer ' + access_token
        }
    }).then( (response) => {
        response.json();
    }).then( (playlistSetObject) => {
        console.log(playlistSetObject.body.href);
        console.log(playlistSetObject.body.limit);
        console.log(playlistSetObject.body.next);
        console.log(playlistSetObject.body.items.tracks.href);
    }).catch( (error) => {
        console.log(error);
        console.log(error.message);
    });
}

