const checkIfThreeEquals = (...args: number[]): boolean => {
    const list: number[] = [...args];
    let result: boolean = true;
    list.forEach((item: number) => {
        const target: number = list[0];
        if (item !== target) {
            result = false;
        }
    })

    return result;
};

const result = checkIfThreeEquals(1, 1 , 1, 1);
console.log('result :', result);