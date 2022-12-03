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
        return fetch('http://localhost:5000/GetActorInfo', {
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
}