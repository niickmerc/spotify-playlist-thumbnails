/*
      /\
     /  \
____/    \____
\            /
 \/        \/
 /          \
/    /\/\    \

*/
// whatever the higher level flow ctrl is should call createImageFromPrompt function
// and then pass the result image into this module's function onClick 'Confirm' or 'Change Playlist Image' button.

const access_token; // get the access token here from app.js

// Given an image and a playlist_id, update the playlist cover image.
// use: https://developer.spotify.com/documentation/web-api/reference/#/operations/upload-custom-playlist-cover
export function changeCOVERS(image, playlist_id) {
    return fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/images`, {
        method: 'PUT',
        headers: {
            'Authorization' : `Bearer ${access_token}`
        }
        // add content-type as a header?
    }).then( (response) => {
        // maybe a response.json() if it fails? check endpoint with POSTman
    }).catch( (error) => {
        console.log(error);
        console.log(error.message);
    });
}



