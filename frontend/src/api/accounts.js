import { hostname } from './config';

import axios from 'axios';

function error(err) {
    console.error(err);
    alert("Error:\n" + err);
}

export class Accounts {

    getProfiles() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/users')
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    getProfile(id) {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/users/' + id)
                .then(response => {
                    resolve(response.data[0]);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    updateProfile(id, profile) {
        return new Promise((resolve, reject) => {
            axios.put(hostname + '/api/users/' + id, { ...profile })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/api/login', { username, password })
                .then(response => {
                    resolve({ status: response.data.status, account: response.data.account });
                })
                .catch(err => {
                    error(err);
                    resolve({ status: false });
                });
        });
    }

    register(account) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/api/register', { ...account })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    error(err);
                    resolve(undefined);
                });
        });
    }

    follow(followerId, followedId) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/api/follows', { follower: followerId, followed: followedId })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    error(err);
                    resolve(undefined);
                });
        });
    }

}

export default Accounts;