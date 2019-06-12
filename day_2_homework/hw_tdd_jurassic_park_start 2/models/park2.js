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

// can use the daily function for annual
// return this.guestsAttractedPerDay() * 252;
//
// to caluclate annual revenue: -
// return this.calculateAverageVisitorsPerYear() * this.ticketPrice


Park.prototype.bestDinosaur = function(){
  compare = function(a, b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  }
  return this.collectionOfDinosaurs.sort(compare)[0];
}

// loop code for most popular //

// let mostPopdino = this.dinosaurs[0]
// for (const dinosaur of this.dinosaurs){
//   if (dinosaur.guestsAttractedPerDay > mostPopDino.guestsAttractedPerDay) {
// mostPopDino = dinosaur
// }
// return mostPopDino
// // }

Park.prototype.removeByspecies = function(species){
  const remainingDinos = []
for (const dinosaur of this.collectionOfDinosaurs) {
  if(dinosaur.species !== species){
    remainingDinos.push(dinosaur)
  }
}
this.collectionOfDinosaurs remainingDinos;
};


// Park.prototype.removeAllDinosaursBySpecies = function () {
//   this.collectionOfDinosaurs.splice(0, this.collectionOfDinosaurs.species());
// }


module.exports = Park;
