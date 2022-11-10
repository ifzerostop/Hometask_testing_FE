import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle";

test('should properly output rectangle perimeter', () => {
  const outputNumber = getRectanglePerimeter(5, 5);
  expect(outputNumber).toBe(20);
});

test('should properly output rectangle area', () => {
  const outputArea = getRectangleArea(5, 5);
  expect(outputArea).toBe(25);
});

test('should properly output rectangle information', () => {
  const area = getRectangleArea(5,4);
  const perimeter = getRectanglePerimeter(5,4);
  console.log = jest.fn();
  getRectangleInfo(4,5);
  expect(console.log).toHaveBeenCalledWith("The perimeter of a rectangle is 18 and the area is 20");
});
