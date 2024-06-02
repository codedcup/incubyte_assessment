function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const cDelimiter = parts[0].slice(2);
        delimiter = new RegExp(cDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        numbers = parts[1];
    }
    const nums = numbers.split(delimiter);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;