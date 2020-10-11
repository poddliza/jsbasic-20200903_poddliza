/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let strArr = str.split('-');

  let newStrArr = [],
    prevItemNotEmpty = false;

  strArr.forEach(function(item, index, array) {
    let newItem;
   
      if(item != '' && index > 0){
        let firstSymb = item != '' ? item[0].toUpperCase() : '',
          restSymb = item.slice(1);
        
          newItem = firstSymb + restSymb;
      }else{
        newItem = item;
      }
    
      newStrArr.push(newItem);
      prevItemNotEmpty = true;
  });

  let newStr = newStrArr.join('');
  
  return newStr;
}
