
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const login = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;
        if (login === 'administrador' && senha === 'adm123') {
           
            window.location.href = './projetos.html';
        } else if (login === 'donatario01' && senha === 'dona123') {
            window.location.href = './doacao.html';
        } else {
            alert('Usuário ou senha inválidos!');
        }
    });
});

