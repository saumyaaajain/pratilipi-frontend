const server = "https://stories-api-js.herokuapp.com" //process.env.SERVER_URL

export const getStory = async (id) => {
    return fetch(`${server}/stories/${id}`, {
        method: 'get',
        credentials: 'omit',
        headers: new Headers({
            "Authorization": 'Bearer '+JSON.parse(localStorage.getItem('token'))
        })
    })
}

export const getAllStories = async() => {
    return fetch(server+"/stories/all", {
        method: 'get',
        credentials: 'omit',
    })
}

export const signup = async (fname, lname, email, password) => {
    return fetch(`${server}/register`, {
        method: 'post',
        credentials: 'omit',
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({name: fname+" "+lname ,email, password})
    })
}

export const signin = async (email, password) => {
    return fetch(`${server}/login`, {
        method: 'post',
        credentials: "omit",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({email, password})
    })
}

export const addStory = async (title, content) => {
    return fetch(`${server}/stories/`, {
        method: 'post',
        credentials: "omit",
        headers: new Headers({
            "Authorization": 'Bearer '+JSON.parse(localStorage.getItem('token')),
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({title, content})
    })
}
