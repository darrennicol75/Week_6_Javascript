const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur0;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let park;

  beforeEach(function () {
    dinosaur0 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('dippy', 'veggy', 100);
    dinosaur2 = new Dinosaur('terra', 'carnivore', 75);
    dinosaur3 = new Dinosaur('sabre tooth', 'carnivore', 150);
    dinosaur4 = new Dinosaur('dippy2', 'veggy', 100);
    dinosaur5 = new Dinosaur('Rhino', 'carnivore', 40);
    park = new Park('Kelvingrove', 5, []);
  });

  it('should have a name', function
  (){
    const actual = park.name;
    assert.strictEqual(actual, 'Kelvingrove');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("t-rex");
    park.addDinosaur("dippy");
    park.addDinosaur("terra");
    park.addDinosaur("sabre tooth");
    park.addDinosaur("dippy2");
    park.addDinosaur("rhino");
    park.removeDinosaur('dippy');
    const expected = ['t-rex', 'terra', 'sabre tooth', 'dippy2', 'rhino']
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to total the amount of visitors per day', function(){
    park.addDinosaur(dinosaur0);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const expected = 515;
    assert.deepStrictEqual(park.totalVistors(), expected);
  });

  it('should be able to total the amount of visitors per year', function(){
    park.addDinosaur(dinosaur0);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const expected = 129780;
    assert.strictEqual(park.totalVistorsYear(), expected);
  });

  // Not sure how to calc

  it('should be able to find the most popular dinosaur', function(){
    park.addDinosaur(dinosaur0);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const expected = dinosaur3;
    assert.deepStrictEqual(park.bestDinosaur(), expected);
  });

  it('should be able to find all dinosaurs species',);
  // function(){
  //   park.addDinosaur("t-rex");
  //   park.addDinosaur("dippy");
  //   park.addDinosaur("terra");
  //   park.addDinosaur("sabre tooth");
  //   park.addDinosaur("dippy2");
  //   park.addDinosaur("rhino");
  //   const expected = ['t-rex', 'dippy', 'terra', 'sabre tooth', 'dippy2', 'rhino']
  //   const actual = park.speciesDinosaurs;
  //   assert.deepStrictEqual(actual, expected);
  // });

  it('should be able to remove all dinosaurs of a particular species');

  it('should be able to find all dinosaurs species');

});
