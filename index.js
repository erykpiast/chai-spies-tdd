import spies from 'chai-spies';

export default function(chai, utils) {
    chai.use(spies);
    
    utils.addMethod(chai.assert, 'calledOnce', function(actual, expected, msg) {
        new chai.Assertion(actual).to.have.been.called.once(msg);
    });
    
    utils.addMethod(chai.assert, 'notCalledOnce', function(actual, expected, msg) {
        new chai.Assertion(actual).not.to.have.been.called.once(msg);
    });
}
