const sum = function() {
  const [a = 0, b = 0] = arguments;
  return arguments.length > 2
    ? sum(a + b, +Array.prototype.splice.call(arguments, 2))
    : a + b;
};

export default {
  sum
};
