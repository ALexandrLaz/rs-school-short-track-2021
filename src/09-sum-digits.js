/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  const strNArr = n.toString().split('');
  for (let i = 0; i < strNArr.length; i++) {
    sum += Number(strNArr[i]);
  }
  if (sum < 10) {
    return sum;
  }
  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
