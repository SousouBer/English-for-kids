import * as cards from './cards.js';
import { categories } from './categories.js';
import { Card } from './CardComponent.js'; 
import { CardItem, playAudio } from './CardItem.js'; 

const cardContainer = document.querySelector('.container');
const mainHeader = document.querySelector('.main-heading');
const burgerMenu = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-wrapper');
const cardItem = document.getElementsByClassName('card');
const navItems = document.getElementsByClassName('nav-item');
const trainBtn = document.querySelector('.switch-button');
const trainCircle = document.querySelector('.switch-circle');
const train = document.querySelector('.train');
const play = document.querySelector('.play');
const playBtn = document.querySelector('.train-button');
const stats = document.querySelector('.stats-table');
const btnStatistics = document.querySelector('.btn-statistics');
const mainPage = document.querySelector('.main-nav-item');
const mainSection = document.querySelector('.main-section');
const stars = document.querySelector('.stars-section');
const repeat = document.querySelector('.repeat-button');
const backCard = document.getElementsByClassName('.card-back');

let playMode = false;

// BURGER MENU

const darkLayout = document.querySelector('.dark-layout');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hide-nav-menu');
  burgerMenu.classList.toggle('burger-open');
  darkLayout.classList.toggle('active-layout');
  body.classList.toggle('hide-overflow');
});

body.addEventListener('click', (e) => {
  if(e.target.classList.contains('dark-layout') || e.target.classList.contains('nav-item') || e.target.classList.contains('main-nav-item')){
   darkLayout.classList.remove('active-layout');
   burgerMenu.classList.remove('burger-open');
   navMenu.classList.add('hide-nav-menu');
   body.classList.remove('hide-overflow');
  }
})


class CardList {
 constructor(cardList){
  this.cardList = cardList;
 }

  displayCards(){
    const currentCategory = document.getElementsByClassName('active-nav')[0].id;    
    const cardItems = document.getElementsByClassName('card');    

    cardContainer.innerHTML = '';
    const currentElements = this.cardList.filter(a => a.category === currentCategory);    
    
    for(let card of currentElements){
      const renderedCard = new CardItem(card).render();
      cardContainer.appendChild(renderedCard);
    }    

    stats.style.display = 'none';
    btnStatistics.style.display = 'none';
    playBtn.style.display = 'inline-block';
    repeat.style.display = 'none';
    cardContainer.style.backgroundColor = '#24fff5';
    cardContainer.style.padding = '4rem 0';    

    if(!playMode){
      Array.from(cardItems).forEach(item => {
        item.addEventListener('click', function(e){
         if(e.target.classList.contains('turn-img')){
          new CardItem(item).flipCard();
         } else {
          new CardItem(item).playCardAudio();
         }
        });
      });
      
      btnStatistics.style.display = 'inline-block';  
      playBtn.style.display = 'none';
    }

    defaultSettings();
    switchTrainButton();
  }
}


// *********************************
// *********************************

let allCardsList = [];
let makeStorageData;

// Loop through nav items, render a card and add its category property.  
for(let each of navItems){
    for(let i = 0; i < cards[each.id].length; i++){
      const object = new Card(cards[each.id][i]);
      object.category = each.id;

      allCardsList.push(object);
    }
}


// Train or play button. Clicking on it makes some changes and also applies some styles on the button itself.

function switchTrainButton(){
  const name = Array.from(document.querySelectorAll('.name'));
  const repeatBtn = Array.from(document.querySelectorAll('.turn-img'));
  
  if(playMode){
    name.forEach(item => {
      item.classList.add('hide-name');
    })
    repeatBtn.forEach(btn => {
      btn.classList.add('hide-name');
    })
  } else {
    name.forEach(item => {
      item.classList.remove('hide-name');
    })
  }
}


// Clicking on the play button generates a new array of names of current cards.

let words = [];

playBtn.addEventListener('click', () => {
  words = [];
  const currentCards = Array.from(document.querySelectorAll('.name'));

  Array.from(cardItem).forEach(card => {
    card.addEventListener('click', () => {
      playWordNames(card.id);
    })
  })

  repeat.style.display = 'inline-block';
  playBtn.style.display = 'none';

  for(let name of currentCards){
    words.push(name.textContent);
  }
  playRandomWord();
})


// Render a star icon on every click, either yellow or white, depending on whether the user guessed the pronounced work correctly.

function createStar(result){
  const img = document.createElement('img');

  img.className = 'star';
  img.style.display = 'inline-block';

  if(result === 'correct'){
    img.src = './img/star-win.svg';
  } else {
    img.src = './img/star.svg';    
  }

  stars.appendChild(img);
}

function winOrLoseScreen(){
  if(words.length === 0){
    cardContainer.innerHTML = '';

    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'messageWrapper';

    if(mistake === 0){
      messageWrapper.innerHTML = `
      <h3>Congartulations! No mistakes were made!</h3>
      <img class="result-image" src="./img/success.jpg" alt="Final message">
      `;
    } else {
      messageWrapper.innerHTML = `
      <h3>Oh, no! You made ${mistake} mistakes!</h3>
      <img class="result-image" src="./img/failure.jpg" alt="Final message">
      `;
    }
    cardContainer.appendChild(messageWrapper);

    playAudio(`${mistake === 0 ? 'success' : 'failure'}`);
    defaultSettings();   

    setTimeout(() => {
      createMainPage();
    }, 4000);
  }
}

let mistake = 0;
let correct = 0;

function playWordNames(card = ''){
  const remove = makeStorageData.find(item => item.word === card);
  const disableCard = document.getElementById(card);

  if(!disableCard.classList.contains('inactive-card')){
    if(card === words[0]){
      remove.correct++;
      correct++;
  
      playRandomWord();
      words.splice(0, 1);
  
      createStar('correct');
      playAudio('correct');
      disableCard.classList.add('inactive-card');
    } else {    
      remove.mistakes++;
      mistake = mistake + 1;
  
      playAudio('wrong');
      createStar('wrong');
    }
    saveStorageData();
    winOrLoseScreen();
  }    
}

function playRandomWord(){
  if(words.length > 0){
    setTimeout(() => {
      const randomWords = words.sort(() => Math.random() - 0.5);
      const audioWord = new Audio(`audio/${words[0]}.mp3`);
      
      audioWord.play();      
    }, 500);
  }
}

repeat.addEventListener('click', () => {
  setTimeout(() => {
    new Audio(`audio/${words[0]}.mp3`).play();
  }, 500);
})


// TABLE CODE BELOW
const wrapper = document.getElementById('tableData');

function displayTable(){
  storage();

  cardContainer.innerHTML = '';
  let dataHtml = '';

  const resetButton = document.createElement('button');
  resetButton.className = 'reset-button';
  resetButton.textContent = 'Reset current results';
  cardContainer.style.backgroundColor = 'transparent';

  resetButton.addEventListener('click', () => {
    localStorage.removeItem('cards');

    displayTable();
  })

  for(let each of makeStorageData){    
    const divide = (each.mistakes + each.correct) === 0 ? 1 : (each.mistakes + each.correct);

    const percentage = ((each.correct / divide ) * 100).toFixed(2);

    dataHtml += `<tr><td>${each.word}</td><td>${each.translation}</td><td>${each.category}</td><td>${each.correct + each.mistakes}</td><td>${each.correct}</td><td>${each.mistakes}</td><td>${percentage}%</td></tr>`
  }

  cardContainer.appendChild(resetButton);
  wrapper.innerHTML = dataHtml;

  document.querySelectorAll('.table-sortable th').forEach(headerCell => {
    headerCell.addEventListener('click', () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains('th-sort-asc');

      sortTable(tableElement, headerIndex, !currentIsAscending);
    })
  })
}

function sortTable(table, column, asc = true){
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    
    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  while(tBody.firstChild){
    tBody.removeChild(tBody.firstChild);
  }

  tBody.append(...sortedRows);

  table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
  table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle('th-sort-asc', asc);
  table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle('th-sort-desc', !asc);  
}

btnStatistics.addEventListener('click', () => {
  stats.style.display = 'table';
  btnStatistics.style.display = 'none';
  cardContainer.style.padding = '0';

  displayTable();
})

Array.from(navItems).forEach(item => {
  item.addEventListener('click', () => {  
    updateCards(item);
  })
})

function updateCards(navId){
  selectActiveNavItem(navId);
  new CardList(allCardsList).displayCards();
}

trainBtn.addEventListener('click', () => {
  if(!mainPage.classList.contains('active-nav')){
    trainBtn.classList.toggle('train-active');
    playOrTrain();
  }
});

function playOrTrain(){
  if(trainBtn.classList.contains('train-active')){
    playMode = false;
    train.style.color = '#fff';
    play.style.color = 'black';
  } else {
    playMode = true;
    play.style.color = '#fff';
    train.style.color = 'black';
  
  }
  new CardList(allCardsList).displayCards();
}

mainPage.addEventListener('click', createMainPage);

function selectActiveNavItem(nav){
  const activeNav = document.getElementsByClassName('active-nav');
  activeNav[0].classList.remove('active-nav');
  nav.classList.add('active-nav');
}
  
function createMainPage(){
  selectActiveNavItem(mainPage);

  stats.style.display = 'none';
  playBtn.style.display = 'none';
  btnStatistics.style.display = 'inline-block';


  cardContainer.innerHTML = '';

  for(let category of categories){
    const { id, name, img } = category;

    const categoryCard = document.createElement('div');
    categoryCard.className = 'caterogy-card';
    categoryCard.id = id;
  
    categoryCard.innerHTML = `
      <div class="card-img-container">
        <img src="${img}" alt="${name}">
      </div>
      <h3>${name}</h3>
    `;

    cardContainer.appendChild(categoryCard);
  }
  const categoryCards = document.querySelectorAll('.caterogy-card');

  Array.from(categoryCards).forEach(category => {
    category.addEventListener('click', () => {
      const getNav = document.getElementById(category.id);
      updateCards(getNav);
    })
  })
}

createMainPage();

function defaultSettings(){
  mistake = 0;
  correct = 0;

  repeat.style.display = 'none';
  stars.innerHTML = '';
}

function storage(){
  const storageData = JSON.parse(localStorage.getItem('cards'));

  if(!storageData){
    makeStorageData = allCardsList.slice();
  } else {
    makeStorageData = storageData;
  }
}

storage();

function saveStorageData(){
  localStorage.setItem('cards', JSON.stringify(makeStorageData));
}


