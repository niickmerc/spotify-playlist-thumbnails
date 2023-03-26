import { Configuration, OpenAIApi } from "openai";

// take in list of track - artist
// and get a prompt to send to stable diff

const prompt_init = 'In one sentence, describe the vibe of these songs and what they have in common starting with "The vibe of these songs is:" Do not use the words "lyrics, vocals, characterized":\n';


// All API requests should include your API key in an Authorization HTTP header as follows: Authorization: Bearer OPENAI_API_KEY
const OPENAI_API_KEY = "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";


export function generatePrompt(listOfTracks) {
    let chatGPTPrompt = prompt_init;
    for (let i = 0; i < listOfTracks.length; i++) {
        chatGPTPrompt = chatGPTPrompt + listOfTracks[i][0] + " by " + listOfTracks[i][1] + "\n";
    }
    // call ChatGPT API with fully-formed chatbot prompt.
    // make sure your default org on OpenAI website is set to Spotify.

}
