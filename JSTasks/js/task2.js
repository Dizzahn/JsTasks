const pluralize = (w => (count, word) => {
    let key = 'one';

    if (count > 4 && count < 21) {
        key = 'many';
    } else {
        // const lastDigit = parseInt(count.toString().slice(-1));
        const lastDigit = count % 10;

        if (lastDigit === 1) {
            key = 'one';
        } else if (lastDigit > 1 && lastDigit < 5) {
            key = 'some';
        } else {
            key = 'many';
        }
    }

    return w[word] ? w[word][key] : word;
})({
    'телефон': {
        one: 'телефон',
        some: 'телефона',
        many: 'телефонов'
    }
});

[0, 1, 2, 5, 15, 21, 32, 108, 142, 256].forEach(count => {
    console.log(`${count} ${pluralize(count, 'телефон')}`)
});