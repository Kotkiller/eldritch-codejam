// Импорт всех js файлов

import greenCards from './assets/MythicCards/green/index.js';
import brownCards from './assets/MythicCards/brown/index.js';
import blueCards from './assets/MythicCards/blue/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';

// Объявление переменных

const ancient = document.querySelector(".cthulthu");
const hardness = document.querySelector(".hardness");
const stack = document.querySelector(".stack");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const shuffleDeck = document.querySelector(".shuffle_deck");
const deck = document.querySelector(".deck");
const randomCard=document.querySelector('.card');
const firstStageArr=
      secondStageArr=
      thirdStageArr=

// Листенеры

ancient.addEventListener("click", hardnessChoise);
easy.addEventListener("click", shuffleButton1);
normal.addEventListener("click", shuffleButton2);
hard.addEventListener("click", shuffleButton3);
shuffleDeck.addEventListener("click", Deck);
deck.addEventListener("click", randomCardFunc);

// Функция отображения уровней сложности

function hardnessChoise() {
  hardness.classList.add("activ");
}

// Функции отображения кнопки перемешивания колоды, после выбора уровня сложности

function shuffleButton1() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.add("activ");
  hard.classList.remove("activ");
  normal.classList.remove("activ");
  randomCard.classList.remove("activ");
}

function shuffleButton2() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.remove("activ");
  hard.classList.remove("activ");
  normal.classList.add("activ");
  randomCard.classList.remove("activ");
}

function shuffleButton3() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.remove("activ");
  hard.classList.add("activ");
  normal.classList.remove("activ");
  randomCard.classList.remove("activ");
}

// Функция отображения колоды, после нажатия на кнопку перемешивания колоды

function Deck() {
  shuffleDeck.classList.remove("activ");
  deck.classList.add("activ");
}

// Функция отображения рандомной карты снизу колоды

function randomCardFunc (){
  randomCard.classList.add("activ");
  shuffleDeck.classList.remove("activ");
}

