import { get } from "../requester.js";
import { getSessionInfo } from "./sessionController.js";
import { partials } from "../partials/partials.js";

export function loadDetails(ctx) {
    getSessionInfo(ctx)
    this.loadPartials(partials).then(function () {
        const id = ctx.params.id;
        get('appdata', `treks/${id}`, 'Kinvey')
            .then(x => {
                ctx.imageUrl = x.imageURL;
                ctx.location = x.location;
                ctx.description = x.description;
                ctx.date = x.date;
                ctx.likes = x.likes;
                ctx.organizer = x.organizer;

                this.partial('/components/adventure/details.hbs');
            })
    });

}