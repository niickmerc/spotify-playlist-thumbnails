// take in list of track - artist
// and get a prompt to send to stable diff

const prompt_init = 'In one sentence, describe the vibe of these songs and what they have in common starting with "The vibe of these songs is:" Do not use the words "lyrics, vocals, characterized":\n';


export function generatePrompt(listOfTracks) {
    let chatGPTPrompt = prompt_init;
    for (let i = 0; i < listOfTracks.length; i++) {
        chatGPTPrompt = chatGPTPrompt + listOfTracks[i][0] + " by " + listOfTracks[i][1] + "\n";
    }
    // call ChatGPT API with fully-formed chatbot prompt.

}
