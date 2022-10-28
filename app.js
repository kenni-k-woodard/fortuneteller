/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const answerP = document.getElementById('answer');
const sectionPrompt = document.getElementById('prompt');
const sectionFortune = document.getElementById('fortune');
const refreshBtn = document.getElementById('refresh');
/* State */

/* Events */
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

submitBtn.addEventListener('click', () => {
    sectionPrompt.classList.toggle('hide');
    sectionFortune.classList.toggle('hide');
    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];
    answerP.textContent = randomChoice;
});

refreshBtn.addEventListener('click', () => {
    sectionPrompt.classList.toggle('hide');
    sectionFortune.classList.toggle('hide');
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
