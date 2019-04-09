export function setLoggedIn(loggedState: boolean) {
    localStorage.setItem('loggedIn', loggedState.toString())
}

export function isLoggedIn() {
    return localStorage.getItem('isLoggedIn')
}