# chai-spies-tdd
TDD-style interface for [chai-spies](https://github.com/chaijs/chai-spies).

## List of available functions

 * `assert.calledOnce`
 * `assert.notCalledOnce`
 * `assert.calledTwice`
 * `assert.notCalledTwice`
 * `assert.calledExactly`
 * `assert.notCalledExactly`
 * `assert.calledWith`
 * `assert.notCalledWith`

## Usage

```
import chai from 'chai';
import chaiSpies from 'chai-spies';
import chaiSpiesTdd from 'chai-spies-tdd';

chai.use(chaiSpies);
chai.use(chaiSpiesTdd);

suite('...', () => {
  test('...', () => {
    const mySpy = chai.spy(() => {});
  
    assert.calledExactly(mySpy, 0);
  });
});
```