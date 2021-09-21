const quickSort=require('../quickSort')

describe('Quick Sort', () => {

  it('Sort an array using Quick Sort', () => {
      let arr = [8, 4, 23, 42, 16, 15];
      quickSort(arr,0,arr.length - 1);
      // console.log(arr);
      expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('can Reverse-sorted: ', () => {
      let arr = [20,18,12,8,5,-2];
      quickSort(arr,0,arr.length - 1);      expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques: ', () => {
    let arr = [5,12,7,5,5,7];
    quickSort(arr,0,arr.length - 1);    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
});
it('Sort a nearly-sorted array: ', () => {
    let arr = [5,12,7,5,5,7];
    quickSort(arr,0,arr.length - 1);    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
});

});