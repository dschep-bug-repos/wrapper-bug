const { hello } = require("./handler");

const doSomething = () => {
  // stub of the function representing what we want done after the user's lambda finishes
  console.log("did something!");
};

const wrapper = (event, context, callback) => {
  context.done = (err, res) => {
    doSomething();
    callback(err, res);
  };
  context.succeed = res => {
    doSomething();
    callback(null, res);
  };
  context.fail = err => {
    doSomething();
    callback(err);
  };

  let result;
  try {
    result = hello(event, context, (err, res) => {
      doSomething();
      callback(err, res);
    });
  } catch (err) {
    doSomething();
    callback(err);
  }
  if (result && typeof result.then === "function") {
    result
      .then(realRes => {
        doSomething();
        callback(null, realRes);
      })
      .catch(err => {
        callback(err);
        doSomething();
      });
  } else {
    doSomething();
    return result;
  }
};

module.exports.wrapper = wrapper;
