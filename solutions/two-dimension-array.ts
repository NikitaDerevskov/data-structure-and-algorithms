export function getSpiral(array: number[][]): number[] {
    if (!array || array.length === 0)
        return [];
    let resultArray: number[] = [];
    let startColumn: number = 0;
    let endColumn: number = array[0].length - 1;
    let startRow: number = 0;
    let endRow: number = array.length - 1;
    if (startRow === endRow)
        return array[0];
    /* Say invalid or just return array like this */
    if (array[0].length <= 2) {
        array.forEach(x => resultArray.push(...x));
        return resultArray;
    }
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++)
            resultArray.push(array[startRow][i]);
        for (let i = startRow + 1; i <= endRow; i++)
            resultArray.push(array[i][endColumn]);
        for (let i = endColumn - 1; i >= startColumn; i --)
            resultArray.push(array[endRow][i]);
        for (let i = endRow - 1; i > startRow; i--)
            resultArray.push(array[i][startColumn]);
        startColumn++;
        startRow++;
        endColumn--;
        endRow--;
    }
    return resultArray;
}
