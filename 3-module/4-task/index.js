/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age) {
  let result = '';
  users.forEach((user, index, array) => {
    
    if(user.age <= age){
      result += (result != '' ? '\n' : '') + user.name + ', ' + user.balance;
    }

  });
  return result;
}
