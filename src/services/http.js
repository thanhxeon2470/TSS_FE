const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

function joinURL(base, url) {
    return `${base}/${url}`;
}

const base = `http://192.168.1.3s9:5678/v1`
const request = (url, method="POST", data=null) => {
    url = joinURL(base, url);
    const option = {
        headers,
        method
    }
    if(data){
        option.body = JSON.stringify({...data});
    }
    console.log("Heloooo")
    console.log(option)

    return fetch(url, option);
}

export const get = (url, id) => {
    const method = "GET";
    if (id) {
        url = joinURL(url, id);
    } 
    return request(url, method).then(res => res.json());
}

export const post = (url, data) => {
    const method = "POST";

    return request(url, method, data).then(res => res.json());
}
