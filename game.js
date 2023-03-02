'use strict';

(() => {
const FIGURES_rus = ['камень', 'ножницы', 'бумага'];
const FIGURES_ENG = ['rock', 'scissors', 'paper'];

const getRandom = (one, two) => {
  let randomRes = one + Math.random() * (two - one);
  return Math.floor(randomRes);
};

  const langObj = {
    'RU': {
      figures: ['камень', 'ножницы', 'бумага'],
      startGame: 'камень, ножницы, бумага?',
      validValue: 'Не корректное значение!',
      exit: 'Ты уверен?',
      endGame: 'СЧЕТ:',
    },
    'ENG': {
      figures: ['rock', 'scissors', 'paper'],
      startGame: 'rock, scissors, paper?',
      validValue: 'Please enter a valid value',
      exit: 'You are sure?',
      endGame: 'TOTAL:'
    },
  };

const game = (language) => {
  const result = {
    user: 0,
    SkyNet: 0,
    get gameResult () {
      return `\nSkyNet-${result.SkyNet} \nКожаный-${result.user}`;
    },
  };
  const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_rus;

  return function start () {

    const notification = () => {
      let notification;
      if (language === 'ENG' || language === 'EN') {
        notification = langObj.ENG;
      } else {
        notification = langObj.RU;
      }
      return notification;
    };
    const langSelect = notification();

     const userPlay = () => {
       let userResult;
       let userItem = prompt(`${langSelect.startGame}`, '');
        if (userItem) {
         if (userItem === langSelect.figures[0] || userItem === langSelect.figures[1] || userItem === langSelect.figures[2]) {
           userResult = userItem;
         } else {
           alert(`${langSelect.validValue}`);
           return userPlay();
         }
       }
        if (userItem === null) {
          let who = confirm(`${langSelect.exit}`);
          if (who) {
            return alert(`${langSelect.endGame} ${result.gameResult}`);
          }
        }
        return userResult;
   };

    let inputUser = userPlay();
    let userRes = langSelect.figures.indexOf(inputUser);
    let inputSky = getRandom(0, 3);
     const win = () => {

       if (userRes === inputSky) {
         return result.user;
       }
       if (userRes === 0 && inputSky === 1 || userRes === 1 && inputSky === 2
          || userRes === 2 && inputSky === 0) {
         return  result.user++;
       } else {
         return result.SkyNet++;
       }
     };
      win();
    if (inputUser) {
      return start();
    }
  };
};

window.RPS = game;
})();



