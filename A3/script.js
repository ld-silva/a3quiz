function checkAnswers() {
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
  
    let score = 0;
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("result");
  
    for (const question in answers) {
      const userAnswer = form[question].value;
      if (userAnswer === answers[question]) {
        score++;
      }
    }
  
    result.textContent = `Você acertou ${score} de ${Object.keys(answers).length} perguntas!`;
    result.style.color = score === Object.keys(answers).length ? "green" : "red";
  }
  