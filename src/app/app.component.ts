import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alphabet = '.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  rotor1 = '.EKMFLGDQVZNTOWYHXUSPAIBRCJ';
  rotor2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
  rotor3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';
  reflectorB = 'YRUHQSLDPXNGOKMIEBFZCWVJAT';
  alphabetChars = [];
  rotor1Chars = [];
  rotor2Chars = [];
  rotor3Chars = [];
  reflectorBChars = [];
  alphabetCharsToShow = [];
  rotor1CharsToShow = [];
  INITIAL_LOW_INDEX = 0;
  INITIAL_HIGH_INDEX = 3;
  MAX_LOW_INDEX = 25;
  MAX_HIGH_INDEX = 27;
  lowIndex = this.INITIAL_LOW_INDEX;
  highIndex = this.INITIAL_HIGH_INDEX;
  plainText: string = '';
  currentStep = 0;

  constructor() {
    this.alphabetChars = this.alphabet.split('');
    this.rotor1Chars = this.rotor1.split('');
    this.rotor2Chars = this.rotor2.split('');
    this.rotor3Chars = this.rotor3.split('');
    this.reflectorBChars = this.reflectorB.split('');

    this.alphabetCharsToShow = this.alphabetChars.slice(
      this.lowIndex,
      this.highIndex
    );
    this.rotor1CharsToShow = this.rotor1Chars.slice(
      this.lowIndex,
      this.highIndex
    );
  }

  encryptInput() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rotor1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ';
    let rotor2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
    let rotor3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';
    let reflectorB = 'YRUHQSLDPXNGOKMIEBFZCWVJAT';
    let alphabetChars = alphabet.split('');
    let rotor1Chars = rotor1.split('');
    let rotor2Chars = rotor2.split('');
    let rotor3Chars = rotor3.split('');
    let reflectorBChars = reflectorB.split('');
    let index = 0;

    if (this.currentStep > 0) {
      const steppedAlphabetChars = this.stepAlphabet2(alphabetChars);
      console.log('steppedAlphabetChars', steppedAlphabetChars);
    }

    console.log('plainText', this.plainText);
    const chars = this.plainText.split('');
    index = alphabetChars.indexOf(chars[0]);
    console.log('index in alphabet', index);

    const rotor3E = rotor3Chars[index];
    console.log('rotor3 encryption', rotor3E);
    index = alphabetChars.indexOf(rotor3E);

    const rotor2E = rotor2Chars[index];
    console.log('rotor2 encryption', rotor2E);
    index = alphabetChars.indexOf(rotor2E);

    const rotor1E = rotor1Chars[index];
    console.log('rotor1 encryption', rotor1E);
    index = alphabetChars.indexOf(rotor1E);

    const reflectorE = reflectorBChars[index];
    console.log('reflector encryption', reflectorE);
    index = rotor1Chars.indexOf(reflectorE);

    const rotor1E2 = alphabetChars[index];
    console.log('rotor1 encryption', rotor1E2);
    index = rotor2Chars.indexOf(rotor1E2);

    const rotor2E2 = alphabetChars[index];
    console.log('rotor2 encryption', rotor2E2);
    index = rotor3Chars.indexOf(rotor2E2);

    const rotor3E2 = alphabetChars[index];
    console.log('rotor3 encryption', rotor3E2);
  }

  stepAlphabet2(chars: string[]) {
    // TOOD: if stepCount === 0, return normal alphabet

    // if stepCount === 1
    let alphabetChars = [chars[25], ...chars.slice(0, 25)];

    // if stepCount === 2

    return alphabetChars;
  }

  resetStepCount() {
    this.currentStep = 0;
  }

  stepAlphabet() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetChars = alphabet.split('');
    if (this.currentStep === 0) {
      // console.log('alphabetChars', alphabetChars);
      // return alphabetChars;
    }

    if (this.currentStep === 1) {
      alphabetChars = [alphabetChars[25], ...alphabetChars.slice(0, 25)];
      // console.log('alphabetChars', alphabetChars);
      // return alphabetChars;
    }

    if (this.currentStep === 2) {
      alphabetChars = [
        alphabetChars[24],
        alphabetChars[25],
        ...alphabetChars.slice(0, 24),
      ];
      // console.log('alphabetChars', alphabetChars);
      // return alphabetChars;
    }

    console.log('alphabetChars', alphabetChars);
    this.currentStep += 1;
  }

  stepAlphabet3() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetChars = alphabet.split('');

    if (this.currentStep > 0) {
      alphabetChars = [alphabetChars[25], ...alphabetChars.slice(0, 25)];
    }

    console.log('alphabetChars', alphabetChars);
    this.currentStep += 1;
  }

  prev() {
    this.lowIndex--;
    this.highIndex--;
    if (this.highIndex === this.MAX_HIGH_INDEX - 1) {
      // this.lowIndex--;
      this.highIndex++;
    }
    this.lowIndex =
      this.lowIndex < this.INITIAL_LOW_INDEX
        ? this.INITIAL_LOW_INDEX
        : this.lowIndex;
    this.highIndex =
      this.highIndex < this.INITIAL_HIGH_INDEX
        ? this.INITIAL_HIGH_INDEX
        : this.highIndex;
    this.alphabetCharsToShow = this.alphabetChars.slice(
      this.lowIndex,
      this.highIndex
    );
    this.rotor1CharsToShow = this.rotor1Chars.slice(
      this.lowIndex,
      this.highIndex
    );
  }

  next() {
    this.lowIndex++;
    this.highIndex++;
    this.lowIndex =
      this.lowIndex > this.MAX_LOW_INDEX ? this.MAX_LOW_INDEX : this.lowIndex;
    this.highIndex =
      this.highIndex > this.MAX_HIGH_INDEX
        ? this.MAX_HIGH_INDEX
        : this.highIndex;
    this.alphabetCharsToShow = this.alphabetChars.slice(
      this.lowIndex,
      this.highIndex
    );
    this.rotor1CharsToShow = this.rotor1Chars.slice(
      this.lowIndex,
      this.highIndex
    );
  }
}
