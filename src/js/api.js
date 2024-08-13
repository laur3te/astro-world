document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'eVIyMMjzPmXRAp2aM4lUhcjIs7sAO2e7jhAl5jWP';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('explanation').textContent = data.explanation;

            if (data.media_type === 'image') {
                document.getElementById('image').src = data.url;
                document.getElementById('image').style.display = 'block';
                document.getElementById('video').style.display = 'none';
            } else if (data.media_type === 'video') {
                document.getElementById('video').src = data.url;
                document.getElementById('video').style.display = 'block';
                document.getElementById('image').style.display = 'none';
            }
        })
        .catch(error => console.log('Erro ao buscar dados da API:', error));
});


// Script Botão de voltar 

document.getElementById('back-button').addEventListener('click', function () {
    const video = document.getElementById('video');
    if (video.style.display !== 'none') {
        history.go(-2);
    } else {
        history.back();
    }
});