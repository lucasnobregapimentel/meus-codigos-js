const postsFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        Accept: 'application/json',
        Authorization: 'meunovotoken'
    }
});
