// const promise = new Promise((resolve, reject)=>{
//   const fullFill = Math.random()>0.5;

//   setTimeout(()=>{
//   if (fullFill){
//     resolve('TRUE!!!')
//   }
//   reject('it is a false!!!');
// },2000)
// })

// promise
// .then(

//   result => {
//   console.log(result);
// return 1000
// }

// )
// .then(x=>{
//   console.log(x);
//   return 2000;
// })
// .then(y=>{
//   console.log(y);
//   return 2000;
// })
// .catch(error => console.log(error))
// .finally(()=> console.log('It is will be done any way'))

//----------------------------------------------------------------------------------

// Задание 2
// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const updatedUsers = allUsers.map((user) =>
//   user.name === userName ? { ...user, active: !user.active } : user
// );
// console.log(updatedUsers);
// Promise.race(updatedUsers);

// function toggleUserState(user) {
//   return new Promise(resolve => {
//     const logger = (updatedUsers) => console.table(updatedUsers);
//   });
// }

// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);


// Задание 1

/*
Напиши функцию `delay(ms)`, которая возвращает промис, переходящий в состояние
`"resolved"` через `ms` миллисекунд. Значением исполнившегося промиса должно
быть то кол-во миллисекунд которое передали во время вызова функции `delay`.
*/

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${ms}`);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);