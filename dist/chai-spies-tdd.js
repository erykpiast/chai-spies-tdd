'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (chai, utils) {
  utils.addMethod(chai.assert, 'calledOnce', function (actual, expected) {
    new chai.Assertion(actual).to.have.been.called.once();
  });

  utils.addMethod(chai.assert, 'notCalledOnce', function (actual, expected) {
    new chai.Assertion(actual).not.to.have.been.called.once();
  });

  utils.addMethod(chai.assert, 'calledTwice', function (actual, expected) {
    new chai.Assertion(actual).to.have.been.called.twice();
  });

  utils.addMethod(chai.assert, 'notCalledTwice', function (actual, expected) {
    new chai.Assertion(actual).not.to.have.been.called.twice();
  });

  utils.addMethod(chai.assert, 'calledExactly', function (actual, expected) {
    new chai.Assertion(actual).to.have.been.called.exactly(expected);
  });

  utils.addMethod(chai.assert, 'notCalledExactly', function (actual, expected) {
    new chai.Assertion(actual).not.to.have.been.called.exactly(expected);
  });

  utils.addMethod(chai.assert, 'calledWith', function (actual) {
    var _to$have$been$called;

    for (var _len = arguments.length, expected = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      expected[_key - 1] = arguments[_key];
    }

    (_to$have$been$called = new chai.Assertion(actual).to.have.been.called).with.apply(_to$have$been$called, expected);
  });

  utils.addMethod(chai.assert, 'notCalledWith', function (actual) {
    var _not$to$have$been$cal;

    for (var _len2 = arguments.length, expected = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      expected[_key2 - 1] = arguments[_key2];
    }

    (_not$to$have$been$cal = new chai.Assertion(actual).not.to.have.been.called).with.apply(_not$to$have$been$cal, expected);
  });
};