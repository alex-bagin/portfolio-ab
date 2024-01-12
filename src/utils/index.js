export function filterByTitle(baseArr, sortArr) {
  const stack = [];
  for (let j in sortArr) {
    for (let i in baseArr) {
      if (baseArr[i].title == sortArr[j].title) {
        stack.push(baseArr[i]);
      }
    }
  }
  return stack;
}
