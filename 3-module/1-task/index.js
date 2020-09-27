/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let namesAr = [];
  users.forEach(function(item, index, array){
    namesAr.push(item.name);
  });
  return namesAr;
}
