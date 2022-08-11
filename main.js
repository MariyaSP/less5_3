'use strict';

const list = document.querySelector('.stringList');
let elemList;
let str = prompt('Введите строку списка \n exit  выход\ndel удаление\nclear очистить список');
while(str !== 'exit' && str !== null){
  debugger;
// str = str.trim();
  switch (str){
    case 'clear':
      elemList = document.querySelectorAll('li');
      elemList.forEach(item =>{
       // console.log(item);
        item.remove();
      })
      break;
    case 'del':
      elemList = document.querySelectorAll('li');
        elemList[elemList.length - 1].remove();
      break;
    case '': break;
    default:
      list.insertAdjacentHTML('beforeend', `<li>${str}</li>`);
      break;
  }

  str = prompt('Введите строку списка \n exit  выход\ndel удаление\nclear очистить список');

}
console.log(str);
