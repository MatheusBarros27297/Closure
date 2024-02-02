const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const Saque = document.getElementById('Saque');
    const Conta = document.getElementById('Conta');

    const valorSaque = parseFloat (Saque.value);
    const valorConta = parseFloat (Conta.value);

    const erro = document.querySelector('.erro');
    const sucesso = document.querySelector('.sucesso');

    if (valorSaque > valorConta) {
        erro.innerHTML = 'Saque indisponivel';
        erro.style.display = 'block';
        sucesso.style.display = 'none';
        Saque.value = '';
        Conta.value = '';
    } else {
        sucesso.innerHTML = 'Saque disponivel';
        erro.style.display = 'none';
        sucesso.style.display = 'block';
        Saque.value = '';
        Conta.value = '';
    }                                                                                              
});
