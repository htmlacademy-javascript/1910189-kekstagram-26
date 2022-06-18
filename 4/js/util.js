function getRandomInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isMaxLengthExceeded (string,maxLength) {
  if (string.length<=maxLength) {
    return true;
  }
  return false;
}

getRandomInclusive (1, 10);

isMaxLengthExceeded ('Привет', 10);

export {getRandomInclusive};
