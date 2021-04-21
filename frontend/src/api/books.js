import { hostname } from './config';

import axios from 'axios';

function error(err) {
    console.error(err);
    alert("Error:\n" + err);
}

export class Books{

    getBooks() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/books')
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getBook(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${hostname}/api/books/${id}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

}
export default Books;
