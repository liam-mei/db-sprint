module.exports = {
  convertArrayToBool,
  convertObjToBool
};

function convertArrayToBool(array) {
  return array.map(element => {
    return convertObjToBool(element)
  });
}

function convertObjToBool(obj) {
  return {...obj, completed: !!obj.completed}
}
