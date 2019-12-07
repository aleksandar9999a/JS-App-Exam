import { getSessionInfo } from "./sessionController.js";
import { post } from "../requester.js";
import { partials } from "../partials/partials.js";

export function loadRegisterForm(ctx){
    getSessionInfo(ctx);

    this.loadPartials(partials).then(function () {
        this.partial('./components/register/register.hbs')
    });
}