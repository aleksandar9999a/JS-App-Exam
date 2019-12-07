export function getSessionInfo(ctx) {
    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
    if (ctx.loggedIn) {
        ctx.username = sessionStorage.getItem('username');
    }
}

export function setSessionInfo(data) {
    sessionStorage.setItem('authtoken', data._kmd.authtoken);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('id', data._id);
}

export function clearSessionData(){
    sessionStorage.clear();
}