import { getSessionInfo } from "./sessionController.js";
import { get } from "../requester.js";
import { partials } from "../partials/partials.js";

export function loadHome(ctx) {
    getSessionInfo(ctx);

    this.loadPartials(partials).then(function () {
        this.partial('./components/home/anonHome.hbs')
    });
}