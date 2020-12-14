export function longestSequence(array: number[]): number {
    let isFirstZero: boolean = true;
    let maxSequence: number = 0;
    let newStart: number = 0;
    let oldStart: number = 0;

    if (array.find(x => x === 0) !== 0)
        return array.length;
    if (!array.find(x => x === 1))
        return 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 && isFirstZero) isFirstZero = false;
        if (array[i] === 0 && !isFirstZero) {
            isFirstZero = true;
            if (i - oldStart > maxSequence) maxSequence = i - oldStart;
            oldStart = newStart
            newStart = i + 1;
        }
        if (i === array.length - 1 && array[i] !== 0) {
            if ((i  + 1 )- oldStart > maxSequence) maxSequence = (i + 1 ) - oldStart;
        }
    }
    return maxSequence;
}
