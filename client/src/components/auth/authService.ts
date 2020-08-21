import {baseUrl} from "../../config";

class authService {
    constructor() {
    }

    post(path: string, body: any){
        return fetch(`${baseUrl}/${path}`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    get(path: string) {
        return fetch(`${baseUrl}/${path}`);
    }

    delete(path: string) {
        return fetch(`${baseUrl}/${path}`, {
            method: "delete",
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    update(path: string, body: any){
        return fetch(`${baseUrl}/${path}`, {
            method: "put",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
}

const obj = new authService();

export default obj