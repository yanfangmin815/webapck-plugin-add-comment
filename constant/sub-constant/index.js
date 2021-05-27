function test() {
  try {} catch (err) {} finally {}
}

function testUseful() {
  try {
    console.log('this function is usefull...');
  } catch (err) {
    console.log("err is:" + err);
  } finally {
    console.log("exec finally");
  }
}

export { test, testUseful };