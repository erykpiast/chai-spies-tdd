'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (chai, utils) {
    utils.addMethod(chai.assert, 'calledOnce', function (actual, expected, msg) {
        new chai.Assertion(actual).to.have.been.called.once(msg);
    });

    utils.addMethod(chai.assert, 'notCalledOnce', function (actual, expected, msg) {
        new chai.Assertion(actual).not.to.have.been.called.once(msg);
    });

    utils.addMethod(chai.assert, 'calledTwice', function (actual, expected, msg) {
        new chai.Assertion(actual).to.have.been.called.twice(msg);
    });

    utils.addMethod(chai.assert, 'notCalledTwice', function (actual, expected, msg) {
        new chai.Assertion(actual).not.to.have.been.called.twice(msg);
    });

    utils.addMethod(chai.assert, 'calledExactly', function (actual, expected, msg) {
        new chai.Assertion(actual).to.have.been.called.exactly(expected, msg);
    });

    utils.addMethod(chai.assert, 'notCalledExactly', function (actual, expected, msg) {
        new chai.Assertion(actual).not.to.have.been.called.exactly(expected, msg);
    });

    utils.addMethod(chai.assert, 'calledWith', function (actual, expected, msg) {
        new chai.Assertion(actual).to.have.been.called['with'](expected, msg);
    });

    utils.addMethod(chai.assert, 'notCalledWith', function (actual, expected, msg) {
        new chai.Assertion(actual).not.to.have.been.called['with'](expected, msg);
    });
};

module.exports = exports['default'];