class Letter {
  constructor(str) {
    this.str = str;
    this.visible = /[^a-zA-Z\-\/]/.test(str);
    this.previouslyGuessed = "";
  }
  guess(targetChar) {
    if (this.str.includes(targetChar)) {
      this.visible = true;
      this.previouslyGuessed + targetChar;
    }
    return targetChar == this.str;
  }

  toString() {
    return this.visible ? this.str : "_";
  }

  guessLetter(letter) {
    return this.str.includes(letter);
  }

  guessedCorrectly() {
    const ogSorted = this.str.split().sort();
    const newSorted = this.previouslyGuessed.split().sort();
    return ogSorted.equals(newSorted);
  }
  // getSolution () {}
  // correctGuess (str, word) {
  //     return str
  // }

  // if (word.includes(targetChar)) {
  //   this.guessed = true;
  //   correctGuess(str);
  // } else {
  //   return "guess again";
  // }
}

module.exports = Letter;
