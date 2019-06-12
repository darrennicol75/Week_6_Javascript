const Park = function (name, price, collectionOfDinosaurs, dinosaurs) {
  this.name = name;
  this.price = price;
  this.collectionOfDinosaurs = [];
};

// Park.prototype.numberOfDinosaurs = function(){
//   return this.collectionOfDinosaurs.length;
//
// };

Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.totalVistors = function(){
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalVistorsYear = function(){
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs){
    total += dinosaur.guestsAttractedPerDay * 252;
  }
  return total
}

Park.prototype.bestDinosaur = function(){
  compare = function(a, b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  }
  return this.collectionOfDinosaurs.sort(compare)[0];
}

// Park.prototype.speciesDinosaurs = function(){
//   let i = 0;
//   // let text = "";
//   for ( const dinosaur of this.species){
//
//   }
// }

// Park.prototype.removeAllDinosaursBySpecies = function () {
//   this.collectionOfDinosaurs.splice(0, this.collectionOfDinosaurs.species());
// }


module.exports = Park;
