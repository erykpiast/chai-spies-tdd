export default function (chai, utils) {
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

  utils.addMethod(chai.assert, 'calledWith', function (actual, ...expected) {
    new chai.Assertion(actual).to.have.been.called.with(...expected);
  });

  utils.addMethod(chai.assert, 'notCalledWith', function (actual, ...expected) {
    new chai.Assertion(actual).not.to.have.been.called.with(...expected);
  });
}
