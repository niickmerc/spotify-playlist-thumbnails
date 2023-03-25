/*
      /\
     /  \
____/    \____
\            /
 \/        \/
 /          \
/    /\/\    \

*/


// use: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
// Retrieve all playlists (list of names+playlist_id)
export async function get_All_Playlist_Names_and_IDs(access_token) {
    fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            'Authorization' : 'Bearer ' + access_token
        }
    }).then( (response) => {
        response.json();
    }).then( (playlistSetObject) => {
        let playlist_id_and_names = [];
        playlistSetObject.items.forEach( (playlist) => {
            playlist_id_and_names.push([playlist.name,playlist.id]);
        });
        return playlist_id_and_names;
    }).catch( (error) => {
        console.log(error);
        console.log(error.message);
    });
}

// Use above function to display list of playlists to user in frontend.
// Upon selecting a playlist, get its tracks
// these will be used to create a chatGPT prompt.


// Retrieve playlist items from spotify using a specified id
export function getPlaylistItems(access_token, playlist_id) {
    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks` {
        headers: {
            'Authorization' : 'Bearer ' + access_token
        }
    }).then((response) => {
        response.json();
    }).then((body) => {
        let listOfTracks = [];
        body.items.forEach( (track) => {
            listOfTracks.push([track.name, track.artists[0].name]);
        });
        return listOfTracks;
    }).catch( (error) => {
        console.log(error);
        console.log(error.message);
    });
}