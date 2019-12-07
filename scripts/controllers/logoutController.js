import { post } from "../requester.js";
import { clearSessionData } from "./sessionController.js";
import { redirectAfterFiveSec } from "./redirect.js";

export function logout(ctx){
    post('user', '_logout', 'Kinvey')
    .then(x => {
        clearSessionData();
        redirectAfterFiveSec(ctx, '/');
    })
    .catch(console.error)
}