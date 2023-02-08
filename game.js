'use strict';

(() => {
const FIGURES_rus = ['камень', 'ножницы', 'бумага'];
const getRandom = (one, two) => {
  let randomRes = one + Math.random() * (two - one);
  return Math.floor(randomRes);
};
const game = () => {
  const result = {
    user: 0,
    SkyNet: 0,
    get gameResult () {
      return `СЧЕТ: \nSkyNet-${result.SkyNet} \nКожаный-${result.user}`;
    },
  };
  return function start () {

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
       let userItem = prompt('Введите камень, ножницы, бумага', '');
        if (userItem) {
         if (userItem === FIGURES_rus[0] || userItem === FIGURES_rus[1] || userItem === FIGURES_rus[2]) {
           userResult = userItem
         } else {
           alert('Введи корректное значение!');
           return userResult;
         }
       }
        if (userItem === null) {
          let who = confirm('Ты уверен?');
          if (who) {
            return alert(result.gameResult);
          } else {
            return userPlay()
          }
        }
        return userResult
   };
     const win = () => {
       let gameRes = userPlay() + skyNetPlay()
       console.log(gameRes)
       switch (gameRes) {
         case 'каменькамень':
         case 'ножницыножницы':
         case 'бумагабумага':
           return  result;

         case 'каменьножницы':
         case 'бумагакамень':
         case 'ножницыбумага':
           return result.user++;

         case 'каменьбумага':
         case 'бумаганожницы':
         case 'ножницыкамень':
           return result.SkyNet++;
       }
     }
      win()
    console.log(result.user)
    console.log(result.SkyNet)

    if (userPlay()) {
      return start()
    }
  };
};

window.RPS = game;
})();



