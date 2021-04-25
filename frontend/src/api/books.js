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

    deleteBook(id) {
	return new Promise((resolve, reject) => {
            axios.delete(`${hostname}/api/books/${id}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getRatings(ISBN) {
        return new Promise((resolve, reject) => {
            axios.get(`${hostname}/api/ratings/${ISBN}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getFavorites(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${hostname}/api/favorites/${userId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getDonations(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${hostname}/api/users/donations/${userId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getBorrows(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${hostname}/api/users/borrows/${userId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    checkoutBook(borrowerID, bookID) {
        return new Promise((resolve, reject) => {
            axios.put(`${hostname}/api/books/borrow/${bookID}`, { borrowerID })
                .then(response => {
                    resolve({ status: response.data.status, account: response.data.account });
                })
                .catch(err => {
                    error(err);
                    resolve({ status: false });
                });
        });
    }

}
export default Books;
