import { get, del, post, put } from "../requester.js";
import { getSessionInfo } from "./sessionController.js";
import { partials } from "../partials/partials.js";
import { redirect } from "./redirect.js";

export function loadDetails(ctx) {
    getSessionInfo(ctx)
    this.loadPartials(partials).then(function () {
        const id = ctx.params.id;
        get('appdata', `treks/${id}`, 'Kinvey')
            .then(x => {
                ctx.id = id;
                ctx.imageUrl = x.imageURL;
                ctx.location = x.location;
                ctx.description = x.description;
                ctx.date = x.date;
                ctx.likes = x.likes;
                ctx.organizer = x.organizer;
                ctx.myTrek = localStorage.getItem('username') === x.organizer;

                this.partial('/components/adventure/details.hbs');
            })
    });
}

export function closeTreck(ctx){
    const id = ctx.params.id;
    del('appdata', `treks/${id}`, 'Kinvey')
        .then(x => redirect(ctx, '/'))
        .catch(console.error)
}

export function like(ctx){
    const id = ctx.params.id;
    get('appdata', `treks/${id}`, 'Kinvey')
        .then(x => {
            x.likes = x.likes + 1;
            put('appdata', `treks/${id}`, 'Kinvey', x)
                .then(x =>redirect(ctx, `/details/${id}`))
        })
}