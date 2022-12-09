export default class apiService {

    static PopulateActors() {
        return fetch('http://localhost:5000/populateActors', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    static PopulateMovies() {
        return fetch('http://localhost:5000/populateMovies', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    static GetActorInfo(stage) {
        return fetch('http://localhost:5000/getActorInfo', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "stage": stage
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    static GetMovieInfo(stage) {
        return fetch('http://localhost:5000/getMovieInfo', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "movie": movie
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    static InsertUser(username, password) {
        return fetch('http://localhost:5000/insertUser', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    static CheckLogin(username, password) {
        return fetch('http://localhost:5000/checkLogin', {
            method:'POST',
            mode: 'cors',
            headers : {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }
}