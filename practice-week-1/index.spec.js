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
});
