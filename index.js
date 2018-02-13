
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN


    if (fromN === toN) {      // we start with the base case, when the 'loop' stops
    return toN;
  }

  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;
