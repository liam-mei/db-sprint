module.exports = {
  convertToBool
};

function convertToBool(array) {
  return array.map(element => {
    return { ...element, completed: !!element.completed };
  });
}
