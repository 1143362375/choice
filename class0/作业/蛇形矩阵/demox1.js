const readline = require('readline');
const fs = require('fs');

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const func = item => {
        const Recursion = (start, item) => {
            if (item > 1) {
                const returnValueArr = [];
                const temparr = Recursion(4 * item + start - 4, item - 2);
                for (let i = 0; i < item; i++) {
                    returnValueArr.push([]);
                }
                for (let i = 0; i < item; i++) {
                    returnValueArr[0].push(start + i);
                }
                for (let i = 1; i < item - 1; i++) {
                    returnValueArr[i] = [4 * item - 4 - i + start, ...temparr[i - 1], start + item + i - 1];
                }
                for (let i = 0; i < item; i++) {
                    returnValueArr[item - 1].push(3 * item - 3 + start - i);
                }
                return returnValueArr;
            } else {
                return [
                    [start]
                ];
            }
        }
        return Recursion(1, item)
    }

    rl.on('line', line => {
        const data = func(parseFloat(line));
        const datenow = new Date();
        data.forEach(item => {
            // const printValue = item.map(i => {
            //     return i >= 10 ? `${i}` : `0${i}`;
            // })
            console.log(item.join(','));
        });
        console.log('时间差：', new Date() - datenow)
    });
    rl.on('close', () => {
        process.exit(0);
    });
})()