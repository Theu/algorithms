class QuickFind {
    length: number;
    myArray: number[]
    constructor(length: number) {
        this.length = length;
        this.myArray = new Array(length)
    }

    createArray = (): number[] => {
        for (var i = 0; i < this.length; i++) {
            this.myArray[i] = i;
        }

        return this.myArray;
    }



    find = (a: number, b: number): string | boolean => {
        console.log('this.myArray :', this.myArray);
        if ((a || b) > this.length || (a || b) < 0 ) return `please select a value from 0 to ${this.length}`

        return this.myArray[a] === this.myArray[b];
    }

    union = (a: number, b: number): void => {

        const amyA = this.myArray[a];
        const bmyA = this.myArray[b];

        for (var i = 0; i < this.myArray.length; i++) {
            if (this.myArray[i] == amyA) {

                this.myArray[i] = bmyA;
            }
        }

        console.log('final :', this.myArray);
    }


}

const test = new QuickFind(5);

const array = test.createArray();

console.log(test.find(0,2));
console.log(test.union(0,2));
console.log(test.find(0,2));
// console.log(test.union(1,4));
// console.log(test.union(3,2));