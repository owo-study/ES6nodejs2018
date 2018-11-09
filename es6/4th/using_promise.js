doSomething().then(function(result) {
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function(finalResult) {
    console.log('Got the final result: ' + finalResult);
  })
  .catch(failureCallback);