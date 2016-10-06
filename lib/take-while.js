function takeWhile(func, iterable) {
  function* curriedTakeWhile(i) {
    var take = true;
    for (var item of i) {
      take = func(item);
      if (take) {
        yield item;
      } else {
        break;
      }
    }
  }
  if (iterable) {
    return curriedTakeWhile(iterable);
  }
  return curriedTakeWhile;
}

module.exports = takeWhile;