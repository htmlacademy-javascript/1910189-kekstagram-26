function getRandomInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMaxStringLength (string,maxLength) {
  if (string.length<=maxLength) {
    return true
  }
  return false
}
