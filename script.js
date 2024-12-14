// Selecionar o botão e adicionar evento de clique
document.getElementById("sendButton").addEventListener("click", function () {
    // Capturar os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Verificar se todos os campos estão preenchidos
    if (!name || !address || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Concatenar os valores em uma string
    const message = `Olá, meu nome é ${name}. Meu endereço é ${address}, meu e-mail é ${email} e meu telefone é ${phone}.`;
  
    // Criar o link para abrir o WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  
    // Abrir o link em uma nova aba
    window.open(whatsappLink, "_blank");
  });  