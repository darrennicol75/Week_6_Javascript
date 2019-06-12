const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur0;

  beforeEach(function () {
    dinosaur0 = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a species', function () {
    const actual = dinosaur0.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur0.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur0.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
