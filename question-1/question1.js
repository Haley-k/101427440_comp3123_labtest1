function lowerCaseWords(mixedArr) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(mixedArr)) {
            const lowrCaseWorkds = mixedArr
                .filter(word => typeof word === 'string')
                .map(word => word.toLowerCase());

            resolve(lowrCaseWorkds);
        } else
            reject('Error: Input is not an array');
    });
}

console.log(lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings']));