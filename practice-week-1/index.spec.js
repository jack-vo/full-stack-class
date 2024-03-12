describe('Practice Week 1 - JS basic', function () {
  it('add function should return the total of x + y', function () {
    let test1 = add(5, 4);
    expect(test1).toEqual(9);

    let test2 = add(999, 1);
    expect(test2).toEqual(1000);
  });

  it('minus function should return the result of x - y', function () {
    expect(minus(10, 6)).toEqual(4);
    expect(minus(10, 99)).toEqual(-89);
  });

  it('checkExamResult should return "Pass" or "Fail" based on provided score', function () {
    expect(checkExamResult(60)).toEqual('Pass');
    expect(checkExamResult(50)).toEqual('Pass');
    expect(checkExamResult(30)).toEqual('Fail');
  });

  it('divide function should return the result of x / y', function () {
    expect(divide(10, 5)).toEqual(2);
  });

  it('getAverage function should return the result of (x + y) / 2', function () {
    expect(getAverage(10, 4)).toEqual(7);
  });

  it('getGrade function should return the right grade A, B, C, D, E, F based on the provided score', function () {
    expect(getGrade(95)).toEqual('A');
    expect(getGrade(82)).toEqual('B');
    expect(getGrade(70)).toEqual('C');
    expect(getGrade(64)).toEqual('D');
    expect(getGrade(55)).toEqual('E');
    expect(getGrade(14)).toEqual('F');
  });

  it('getNumbersLargerThanTen should return an array containing all numbers larger than 10 from provided array', function () {
    expect(getNumbersLargerThanTen([5, 12, 8, 15, 3])).toEqual([12, 15]);
    expect(getNumbersLargerThanTen([5, 2, 4, 3])).toEqual([]);
  });

  it('sum should return the total from all numbers in the array', function () {
    expect(sum([1, 3, 5, 7])).toEqual(16);
  });

  it('getArrayAverage should return the average from all numbers in the array', function () {
    expect(getArrayAverage([1, 3, 5])).toEqual(3);
  });

  it('uniqueItems should return the array that contains only the unique item', function () {
    expect(uniqueItems([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([
      1,
      3,
      'Lion',
      5,
      false,
    ]);
  });

  it('reverse should return the array that contains the same list of items in the reversed order', function () {
    expect(reverse([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([
      false,
      5,
      'Lion',
      'Lion',
      1,
      3,
      1,
    ]);
  });

  it('uniqueInOrder should return the array that contains only the item that is not the same as the item next to it', function () {
    expect(uniqueInOrder([1, 2, 2, 3, 3, 2, 2, 5])).toEqual([1, 2, 3, 2, 5]);
  });

  it('reverseSetence should return the same string in the reversed order', function () {
    expect(reverseSetence('Lion is the cage!')).toEqual('!egac eht si noiL');
  });

  it('addFromOneUntil should return the total starting from 1 to the provided number', function () {
    expect(addFromOneUntil(10)).toEqual(55);
    expect(addFromOneUntil(-10)).toEqual(-10);
    expect(addFromOneUntil('a string')).toEqual(false);
  });

  it('countCharacters should the number of duplicated character in the provided sentence', function () {
    expect(countCharacters('a string', 'a string is just a string')).toEqual(
      false
    );
    expect(countCharacters('a', 'a string is just a string')).toEqual(2);
  });

  it('removeItem should return an array without the provided item', function () {
    expect(removeItem(5, [3, 5, 7, 9, 5, 10])).toEqual([3, 7, 9, 10]);
  });

  it('getLargestNumber should return the largest number in the array', function () {
    expect(getLargestNumber([5, 12, 8, 15, 3])).toEqual(15);
  });

  it('getSecondLargestNumber should return the 2nd largest number in the array', function () {
    expect(getSecondLargestNumber([5, 12, 8, 15, 3])).toEqual(12);
    expect(getSecondLargestNumber([5])).toEqual(false);
  });
});
