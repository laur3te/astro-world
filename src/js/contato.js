document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM completamente carregado e analisado');
    const form = document.getElementById('formulario');
    const charCount = document.getElementById('charCount');
    const feedback = document.getElementById('feedback');

    if (form) {
        console.log('Formulário encontrado');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulário enviado!');
        });
    } else {
        console.log('Formulário não encontrado');
    }

    if (feedback && charCount) {
        console.log('Elemento de feedback encontrado');
        feedback.addEventListener('input', function() {
            const remaining = 700 - feedback.value.length;
            charCount.textContent = `${remaining} caracter(es) restante(s)`;
        });
    } else {
        console.log('Elemento de feedback ou contador de caracteres não encontrado');
    }
});
