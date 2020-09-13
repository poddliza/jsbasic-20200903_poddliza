/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strToLowerCase = str.toLowerCase();
  if(strToLowerCase.indexOf(('1xBet').toLowerCase()) > -1 || strToLowerCase.indexOf(('XXX').toLowerCase()) > -1){
    return true;
  }else{
    return false;
  }
}
