document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'eVIyMMjzPmXRAp2aM4lUhcjIs7sAO2e7jhAl5jWP';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('image').src = data.url;
            document.getElementById('explanation').textContent = data.explanation;
        })
        .catch(error => console.log('Erro ao buscar dados da API:', error));
});
