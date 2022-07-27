class CardItem {
  constructor(card){
    this.card = card;
  }

  render(){
    const card = document.createElement('div');

    card.className = 'card-container';      
        card.innerHTML = `
        <div class="card" id="${this.card.word}">
            <div class="card-front">
             <div class="img-container"><img src="${this.card.image}" alt=""></div>
               <h3 class="name">${this.card.word}</h3>
               <button class="turn-card">
                <img class="turn-img" src="./img/repeat.svg" alt="turn card">
               </button>
             </div>
            <div class="card-back">
             <div class="img-container"><img src="${this.card.image}" alt=""></div>
               <h3 class="translation">${this.card.translation}</h3>
            </div>            
            </div>
        `;        
        return card;
  }

  playCardAudio(){
    playAudio(this.card.id);
  }

  removeFlip(){
    this.card.addEventListener('mouseleave', () => {
      this.card.classList.remove('flip-card');
    })
  }

  flipCard(){
    this.card.classList.add('flip-card');
    this.removeFlip();
  }
}

function playAudio(src){
  const audio = new Audio(`./audio/${src}.mp3`);
  audio.play();
}

export { playAudio, CardItem };