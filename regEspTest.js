const fs = require('fs')
try {
    const data = fs.readFileSync('text.txt', 'utf-8');
    const correct = data.replace(/.?'.?/gs, (match) => {
        if (/\w'\w/g.test(match)) {
            return match;
        } else {
            return match.replace(/'/g, '"');
        }
    });
    console.log(correct);
} catch (err) {
    console.error(err)
}
