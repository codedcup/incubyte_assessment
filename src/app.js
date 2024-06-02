function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    if (numbers.length === 1) {
      return parseInt(numbers);
    }
    return 0;
  }

module.exports = add;