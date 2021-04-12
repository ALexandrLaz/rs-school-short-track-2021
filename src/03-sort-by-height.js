/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.sort((a, b) => a - b);
  const finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      finArr.push(arr[i]);
    } else {
      finArr.push(newArr[0]);
      newArr.shift();
    }
  }
  return finArr;
}

module.exports = sortByHeight;
