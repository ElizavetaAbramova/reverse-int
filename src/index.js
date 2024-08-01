module.exports = function reverse (n) {

  let result = '';
  let number = Math.abs(n).toString();
  for (let i = 0; i < number.length; i++) {

    result = `${number[i]}${result}`;
  }

  return result;
}
