// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var expect = require("chai").expect

function testError(fn, props) {
  expect(fn).to.throw()
  try {
    fn()
  } catch (error) {
    Object.keys(props).forEach(function(key) {
      expect(error[key]).to.equal(props[key])
    })
    expect(error.message).to.contain(props.context || "")
    expect(error.message).to.contain(props.subject)
  }
}

module.exports = testError
