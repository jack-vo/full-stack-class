window.fullStackUtil = {
  createRandomNumbers(length) {
    if (length < 3) {
      length = 3;
    } else if (length > 40) {
      length = 40;
    }
    return [...Array(length)].map(() => Math.floor(Math.random() * 40));
  },
};
