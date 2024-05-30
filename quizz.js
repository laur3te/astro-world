// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Qual o nome do centro de um buraco negro de onde a luz é incapaz de sair?',
    answers: [
      {
        answer: 'Disco de acreção',
        correct: false,
      },
      {
        answer: 'Horizonte de Eventos',
        correct: true,
      },
      {
        answer: 'Singularidade',
        correct: false,
      },
      {
        answer: 'Centro gravitacional',
        correct: false,
      },
    ],
  },
  {
    question: 'As estrelas mais quentes do universo tem a coloração...',
    answers: [
      {
        answer: 'Azul',
        correct: true,
      },
      {
        answer: 'Branca',
        correct: false,
      },
      {
        answer: 'Laranja',
        correct: false,
      },
      {
        answer: 'Vermelha',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o nome do buraco negro mais prómixo do planeta Terra?',
    answers: [
      {
        answer: 'Sagittarius A estrela',
        correct: false,
      },
      {
        answer: 'Alpha Centauri',
        correct: false,
      },
      {
        answer: 'Phoenix C-44',
        correct: false,
      },
      {
        answer: 'Gaia BH1',
        correct: true,
      },
    ],
  },
  {
    question: 'Quais são os planetas que possuem anéis?',
    answers: [
      {
        answer: 'Júpiter, Saturno, Urano e Netuno.',
        correct: true,
      },
      {
        answer: 'Terra, Marte e Netuno.',
        correct: false,
      },
      {
        answer: 'Saturno e Netuno.',
        correct: false,
      },
      {
        answer: 'Terra, Marte, Saturno e Urano',
        correct: false,
      },
    ],
  },
  {
    question: 'Quantos satélites tem Júpiter?',
    answers: [
      {
        answer: '73',
        correct: false,
      },
      {
        answer: '66',
        correct: false,
      },
      {
        answer: '95',
        correct: true,
      },
      {
        answer: '67',
        correct: false,
      },
    ],
  },
  {
    question: 'Quanto tempo em média demora para a luz do sol chegar a Terra ?',
    answers: [
      {
        answer: '18 minutos',
        correct: false,
      },
      {
        answer: '8 minutos',
        correct: true,
      },
      {
        answer: '12 minutos',
        correct: false,
      },
      {
        answer: '7 minutos',
        correct: false,
      },
    ],
  },
  {
    question: 'Quantos planetas anões tem em nosso sistema solar ?',
    answers: [
      {
        answer: '3',
        correct: false,
      },
      {
        answer: '1',
        correct: false,
      },
      {
        answer: '8',
        correct: false,
      },
      {
        answer: '5',
        correct: true,
      },
    ],
  },
  {
    question: 'Quantos planetas rochosos existem no nosso sistema solar?',
    answers: [
      {
        answer: '4',
        correct: true,
      },
      {
        answer: '8',
        correct: false,
      },
      {
        answer: '2',
        correct: false,
      },
      {
        answer: '5',
        correct: false,
      },
    ],
  },{
    question: 'Quando o nosso sol morrer, ele deixará um corpo celeste denominado de:',
    answers: [
      {
        answer: 'Quasar',
        correct: false,
      },
      {
        answer: 'Anã-Branca',
        correct: true,
      },
      {
        answer: 'Buraco negro',
        correct: false,
      },
      {
        answer: 'Estrela de nêutrons',
        correct: false,
      },
    ],
  },{
    question: 'Qual é a velocidade da luz?',
    answers: [
      {
        answer: '345.778 km/h',
        correct: false,
      },
      {
        answer: '445.000 km/h',
        correct: false,
      },
      {
        answer: '299.792 km/s',
        correct: true,
      },
      {
        answer: '300.000 km/s',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });
  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
