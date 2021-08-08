const baseUrl = `https://api.thecatapi.com/v1/`;
export const apiCall = (link) =>
    fetch(`${baseUrl}${link}`).then(response => response.json());

