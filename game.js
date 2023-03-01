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
      startGame: 'камень, ножницы, бумага?',
      validValue: 'Не корректное значение!',
      exit: 'Ты уверен?',
      endGame: 'СЧЕТ:',
    },
    'ENG': {
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

    const skyNetPlay = () => {
      let skyResult = '';
      let skyItem = getRandom(0, 3)
      if (skyItem === 0) {
        skyResult = 'камень';
        return skyResult;
      }
      if (skyItem === 1) {
        skyResult = 'ножницы';
        return skyResult;
      } else {
        skyResult = 'бумага';
        return skyResult;
      }
    };
     const userPlay = () => {
       let userResult = '';
       let userItem = prompt(`${langSelect.startGame}`, '');
        if (userItem) {
         if (userItem === FIGURES_rus[0] || userItem === FIGURES_rus[1] || userItem === FIGURES_rus[2] ||
           userItem === FIGURES_ENG[0] || userItem === FIGURES_ENG[1] || userItem === FIGURES_ENG[2]) {
           userResult = userItem
         } else {
           alert(`${langSelect.validValue}`);
           return userResult;
         }
       }
        if (userItem === null) {
          let who = confirm(`${langSelect.exit}`);
          if (who) {
            return alert(`${langSelect.endGame} ${result.gameResult}`);
          }
        }
        return userResult
   };
    let inputUser = userPlay()
    let inputSky = skyNetPlay()
     const win = () => {

       let gameRes = inputUser + inputSky
       console.log(gameRes)
       switch (gameRes) {
         case 'каменькамень' || 'rockrock':
         case 'ножницыножницы' || 'scissorsscissors':
         case 'бумагабумага' || 'paperpaper':
           return  result;

         case 'каменьножницы' || 'rockscissors':
         case 'бумагакамень' || 'paperrock':
         case 'ножницыбумага' || 'scissorspaper':
           return result.user++;

         case 'каменьбумага' || 'prockaper':
         case 'бумаганожницы' || 'paperscissors':
         case 'ножницыкамень' || 'scissorsrock':
           return result.SkyNet++;
       }
     }
      win();
    if (inputUser) {
      return start();
    }
  };
};

window.RPS = game;
})();



