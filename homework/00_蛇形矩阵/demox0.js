const readline = require('readline');
const fs = require('fs');

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const func = item => {
        const data = [];
        const arrTop = [];
        const arrBottom = [];
        const arrLeft = [];
        const arrRight = [];

        // 初始化所有数据
        let itemNow = item;
        for (let i = 0, length = item * item; i < length; i++) {
            data.push(i + 1);
        }


        while (data.length > 0) {
            let tempArrTop = [];
            let tempArrBottom = [];
            const delUndefined = (arr) => {
                // console.log(arr);
                return arr ? arr : [];
            }
            const temAddArr = [
                delUndefined(arrLeft.shift()),
                delUndefined(arrRight.shift()),
                delUndefined(arrLeft.pop()),
                delUndefined(arrRight.pop()),
            ]

            for (let i = 0, length = itemNow; i < length; i++) {
                tempArrTop.push(data.shift());
            }
            for (let i = 0, length = itemNow - 2; i < length; i++) {
                if (arrRight[i]) {
                    if (data.length > 0) {
                        arrRight[i].unshift(data.shift());
                    }
                } else {
                    arrRight[i] = [data.shift()];
                }
            }
            for (let i = 0, length = itemNow; i < length; i++) {
                tempArrBottom.push(data.shift());
            }
            tempArrBottom = tempArrBottom.reverse();
            for (let i = itemNow - 3; i >= 0; i--) {
                if (arrLeft[i]) {
                    if (data.length > 0) {
                        arrLeft[i].push(data.shift());
                    }
                } else {
                    arrLeft[i] = [data.shift()];
                }
            }

            // 添加两侧
            tempArrTop = [...temAddArr[0], ...tempArrTop, ...temAddArr[1]];
            tempArrBottom = [...temAddArr[2], ...tempArrBottom, ...temAddArr[3]]
            arrTop.push(tempArrTop);
            if (tempArrBottom[0]) {
                arrBottom.push(tempArrBottom);
            }
            itemNow = itemNow - 2;
        }

        return [...arrTop, ...arrBottom.reverse()];
    }

    rl.on('line', line => {
        const data = func(parseFloat(line));
        let returnValue = [];
        // const datenow = new Date();
        data.forEach(item => {
            // const printValue = item.map(i => {
            //     return i >= 10 ? `${i}` : `0${i}`;
            // })
            returnValue.push(item.join(' '));
        });
        console.log(returnValue.join(' '));
        // console.log('时间差：', new Date() - datenow)
    });
    rl.on('close', () => {
        process.exit(0);
    });
})();