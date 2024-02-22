export const truncator = (statement) => {
  var limit = 10;
  const words = statement.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  } else {
    return statement;
  }
};
