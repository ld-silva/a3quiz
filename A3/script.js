//Função chamada ao clicar no botão Enviar
function checkAnswers() {
    //Objeto que mapeia as perguntas ás respostas corretas (Gabarito)
    const answers = {
      q1: "c",
      q2: "b",
      q3: "c",
      q4: "b",
      q5: "a",
      q6: "b",
      q7: "c",
      q8: "b",
      q9: "b",
      q10: "a",
    };

    
    let score = 0; // Contador de respostas corretas
    const form = document.getElementById("quiz-form"); //Obtém o HTML
    const result = document.getElementById("result"); 

    //Percorre as questões (q1 ao q10)
    for (const question in answers) {
      const userAnswer = form[question].value; //Obtém a resposta selecionada pelo usuário
      if (userAnswer === answers[question]) { // Verifica se a resposta selecionada é a correta
        score++;
      }
    }

    //Mostra o resultado
    result.textContent = `Você acertou ${score} de ${Object.keys(answers).length} perguntas!`;
    result.style.color = score === Object.keys(answers).length ? "green" : "red";
  }
  
