function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const nums = numbers.split(",");
    if (nums.length === 1) {
        return parseInt(numbers);
    }
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;