const ball = document.querySelector('.ball-img img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const reset = document.querySelector('.reset')

const answers = [
	'Spróbuj później',
	'Spróbuj ponownie',
	'Brak opinii',
	'To twoje przeznaczenie',
	' Kości zostały rzucone',
	'Jedna szansa z dwóch',
	'Zadaj pytanie ponownie',
	'Moim zdaniem tak',
	'Na pewno',
	'Tak, absolutnie',
	'Możesz na to liczyć',
	'Bez wątpienia',
	'Bardzo prawdopodobne ',
	'Tak',
	'Na dobry początek',
	'To nie jest',
	'Mało prawdopodobne',
	'Nie śnij',
	'Nie licz',
	'Niemożliwe'
]

// funkcja do sprawdzania inputa, funkcja do wyświetlania errora, funkcja do wyświetlania odpowiedzi, resetowania


// FUNKCJA DŹWIĘKU

const playSound = () => {
	const sound = new Audio('magic-fairy.mp3')

	setTimeout(() => {
		sound.play()
	}, 1000);
	
}



// FUNKCJA WYŚWIETLAJĄCA ODPOWIEDŹ

const giveAnswer = () => {

	const randomIndex = Math.floor(Math.random() * answers.length);
	const randomAnswer = answers[randomIndex];
	const span = document.createElement('span');
    span.textContent = 'Odpowiedź: ';

    answer.appendChild(span);

	answer.textContent = randomAnswer
}

// FUNKCJA WYŚWIETLAJĄCA BŁĘDY 

const sendError = (msg) => {
	error.textContent = msg
	answer.textContent = ''
}

// FUNKCJA CZYSZCZĄCA

const clearAll = () => {
	answer.textContent = ''
	input.value = ''
	error.textContent = ''
}

// FUNKCJA ANIMUJĄCA BILĘ 

const animate = () => {
		ball.classList.add('shake-animation')
		playSound()
		setTimeout(() => {
            ball.classList.remove('shake-animation')
        }, 1000);
}

// SPRAWDZANIE INPUTA 

const checkQuestion = () => {
	if(input.value.includes('?')) {
		animate()
		setTimeout(() => {
			giveAnswer()
        }, 1000);
		if(error.textContent !== ''){
			error.textContent = ''
		}
	} else if(input.value === '') {
		sendError('Wypełnij pole powyżej!');
	} else {
		sendError('Brakuje znaku zapytania "?"');
	}
}


ball.addEventListener('click', checkQuestion)
reset.addEventListener('click', clearAll)