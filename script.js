const questions = [
    {
      question: "Quem foi o primeiro presidente de Moçambique?",
      answers: ["Samora Machel", "Joaquim Chissano", "Armando Guebuza", "Filipe Nyusi"],
      correct: 0
    },
    {
      question: "Quanto é 8 x 7?",
      answers: ["54", "56", "64", "58"],
      correct: 1
    },
    {
      question: "Qual é a capital da província de Nampula?",
      answers: ["Nacala", "Ilha de Moçambique", "Nampula", "Angoche"],
      correct: 2
    },
    {
      question: "Em que ano Moçambique tornou-se independente?",
      answers: ["1974", "1975", "1980", "1965"],
      correct: 1
    },
    {
      question: "Quem descobriu o caminho marítimo para a Índia?",
      answers: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Bartolomeu Dias"],
      correct: 2
    },
    {
      question: "Qual o resultado de (3 + 5)²?",
      answers: ["64", "36", "128", "49"],
      correct: 0
    },
    {
      question: "Que rio divide Moçambique e Zimbábue?",
      answers: ["Zambeze", "Save", "Limpopo", "Ruvuma"],
      correct: 0
    },
    {
      question: "Qual é o maior parque nacional de Moçambique?",
      answers: ["Gorongosa", "Bazaruto", "Limpopo", "Niassa"],
      correct: 3
    },
    {
      question: "Quanto é 100 ÷ 4?",
      answers: ["20", "25", "30", "22"],
      correct: 1
    },
    {
      question: "Que povo resistiu aos colonos na região de Gaza?",
      answers: ["Macuas", "Nguni", "Changana", "Vátuas"],
      correct: 2
    },
    {
      question: "Em qual continente está Moçambique?",
      answers: ["Ásia", "Europa", "África", "Oceania"],
      correct: 2
    },
    {
      question: "Qual é o nome da moeda oficial de Moçambique?",
      answers: ["Rand", "Kwanza", "Metical", "Escudo"],
      correct: 2
    },
    {
      question: "Quanto é √81?",
      answers: ["7", "8", "9", "6"],
      correct: 2
    },
    {
      question: "Quem liderou a luta da FRELIMO após Eduardo Mondlane?",
      answers: ["Chissano", "Samora Machel", "Nyusi", "Marcelino dos Santos"],
      correct: 1
    },
    {
      question: "Qual é o resultado de 5² + 4²?",
      answers: ["41", "45", "49", "50"],
      correct: 0
    }
  ];
  
  let current = 0;
  let score = 0;
  let timer;
  let timeLeft = 15;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const timerEl = document.getElementById("timer");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    timerEl.textContent = `Tempo: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Tempo: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showAnswer(-1); // tempo esgotado
      }
    }, 1000);
  
    const q = questions[current];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.answers.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.onclick = () => showAnswer(i);
      answersEl.appendChild(btn);
    });
  }
  
  function showAnswer(selected) {
    clearInterval(timer);
    const correct = questions[current].correct;
    if (selected === correct) {
      score += 1;
      alert("✅ Correto!");
    } else {
      alert(`❌ Errado! Resposta correta: ${questions[current].answers[correct]}`);
    }
    scoreEl.textContent = `Pontuação: ${score}`;
    nextBtn.style.display = "block";
  }
  
  nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
      nextBtn.style.display = "none";
      loadQuestion();
    } else {
      endGame();
    }
  };
  
  function endGame() {
    questionEl.textContent = "Fim do quiz!";
    answersEl.innerHTML = `<p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
    nextBtn.style.display = "none";
  }
  
  loadQuestion();
  