const { hello } = require("./handler");

const doSomething = () => {
  // stub of the function representing what we want done after the user's lambda finishes
  console.log("did something!");
};

const wrapper = (event, context, callback) => {
  let didSomething = false;
  const doSomethingOnce = () => {
    if (didSomething) return;
    doSomething();
    didSomething = true;
  };

  const { done, succeed, fail } = context;
  context.done = (err, res) => {
    doSomethingOnce();
    done(err, res);
  };
  context.succeed = res => {
    doSomethingOnce();
    succeed(res);
  };
  context.fail = err => {
    doSomethingOnce();
    fail(err);
  };

  let result;
  try {
    result = hello(event, context, (err, res) => {
      doSomethingOnce();
      callback(err, res);
    });
  } catch (err) {
    doSomethingOnce();
    callback(err);
  }
  if (result && typeof result.then === "function") {
    return result
      .then(realRes => {
        doSomethingOnce();
      })
      .catch(err => {
        doSomethingOnce();
        throw err;
      });
  } else {
    doSomethingOnce();
    return result;
  }
};

module.exports.wrapper = wrapper;
