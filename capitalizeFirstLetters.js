function capitalizeFirstLetters(input) {
    let t = input.split(' ');
    return t.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}

module.exports = capitalizeFirstLetters;