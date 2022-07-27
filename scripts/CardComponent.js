export class Card {
  constructor({word, translation, audioSrc, image}){
    this.word = word;
    this.translation = translation;
    this.audioSrc = audioSrc;
    this.image = image;
    this.mistakes = 0;
    this.correct = 0;
  }
}
