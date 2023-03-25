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

// Given an image and a playlist_id, update the playlist cover image.
// use: https://developer.spotify.com/documentation/web-api/reference/#/operations/upload-custom-playlist-cover
export function changeCOVERS(access_token, image, playlist_id) {
    const formData = new FormData();
    formData.append('image',image);
    return fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/images`, {
        method: 'PUT',
        headers: {
            'Authorization' : `Bearer ${access_token}`,
            'Content-Type': 'image/jpeg'
        },
        body: formData
    }).then( (response) => {
        if (!response.ok) {
            console.log('Failed to upload cover image.');
        } else {
            console.log('Cover image uploaded successfully.');
        }
        // maybe a response.json() if it fails? check endpoint with POSTman
    }).catch( (error) => {
        console.log(error);
    });
}



