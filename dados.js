 //Código para fazer a simulação de cadastro de usuario:
 document.getElementById("formCadastro").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    document.getElementById("resultado").innerHTML =
      "<strong>Dados cadastrados:</strong><br>" +
      "Nome: " + nome + "<br>" +
      "Email: " + email + "<br>" +
      "Idade: " + idade + "<br>" +
      "Curso desejado: " + curso;
  });