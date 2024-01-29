
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount: 100000, years: 1, rate: 6})).toEqual(8599.34.toString());
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount: 500000, years: 1, rate: 6}).substring(calculateMonthlyPayment({amount: 500000, years: 1, rate: 6}).length -3).length).toEqual(3);
});

/// etc
