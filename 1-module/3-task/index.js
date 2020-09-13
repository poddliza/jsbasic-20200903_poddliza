/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstLetterToUpperCase = str.charAt(0).toUpperCase(),
      restOfString = str.slice(1);
      return firstLetterToUpperCase + restOfString;

}
