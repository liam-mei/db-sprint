module.exports = {
  convertArrayToBool,
  convertObjToBool
};

function convertArrayToBool(array) {
  return array.map(element => {
    return { ...element, completed: !!element.completed };
  });
}

function convertObjToBool(obj) {
  return {...obj, completed: !!obj.completed}
}