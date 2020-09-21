/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sumSalary = 0;
  for (let key in salaries) {
    sumSalary = sumSalary + (typeof(salaries[key]) === 'number' ? salaries[key] : 0);
  }
  return sumSalary;
}
