export default class getUsers {
    static getUsersList(query) {
        return fetch('https://api.github.com/search/users?q=' + query).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}