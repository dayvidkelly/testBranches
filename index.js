console.clear();
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(thisIsAfunction(element));
}
function thisIsAfunction(value) {
  if (value % 2 == 0) {
    return `Number: ${value} is even`;
  } else {
    return `Number: ${value} is Odd`;
  }
}
