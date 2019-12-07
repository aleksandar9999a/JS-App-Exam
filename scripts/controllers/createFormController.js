import { getSessionInfo, setSessionInfo } from "./sessionController.js";
import { post } from "../requester.js";
import { partials } from "../partials/partials.js";

export function loadCreateTrekForm(ctx){
    getSessionInfo(ctx);

    this.loadPartials(partials).then(function () {
        this.partial('./components/adventure/createAdventure.hbs')
    });
}