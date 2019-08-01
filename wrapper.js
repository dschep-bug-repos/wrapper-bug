const { hello } = require("./handler");
const wrapper = (event, context, callback) => {
  context.done = (err, res) => {
    callback(err, res);
  };
  context.succeed = res => {
    callback(null, res);
  };
  context.fail = err => {
    callback(err);
  };

  let result;
  try {
    result = hello(event, context, (err, res) => callback(err, res));
  } catch (err) {
    callback(err);
  }
  if (result && typeof result.then === "function") {
    result
      .then(realRes => {
        callback(null, realRes);
      })
      .catch(err => {
        callback(err);
      });
  } else {
    return result;
  }
};

module.exports.wrapper = wrapper;
