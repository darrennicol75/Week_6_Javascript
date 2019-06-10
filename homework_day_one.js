// Episode One //

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// The above declares constant variables of murderer, room and weapon. It uses a named function to return the name of the murderer that is passed in from scenario. There is no attempt to mutate the entry.

// // Episode Two //

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer: 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The above declares the murderer as a constant as Professor Plum, it then declares a function as changeMurderer but then declaresMurderer using the murderer, therefore the verdict remains as Professor Plum. I think there was also a typo on line 19 with an equals instead of a :

// Episode Three //

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Episode Three: let murderer is introduced first but let can be changed. The const introduced in the next block changes murderer to Mrs. Peacock in the first verdict but only in that block. The second verdict calls on murderer which in this case is the initial declared murderer 'Professor Plum'.

// Episode Four //

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Episode Four: the three suspects are listed, a function is then created in which suspect three is changed to Colonel Mustard, all of which are then called and the three suspects are listed. The final piece of code calls on suspect three which in this case comes from the initial suspect three "Mrs. Peacock"

// Episode Five //

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Episode Five: the sceanrio is set in the first instance where the weapon is a Candle stick. However elements of a constant can be modified and in this case it has been changed to a revolver.

// Episode Six //

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode Six: the initial murderer is Colonel Mustard but as it is a let it can be changed by declaring a constant. In this case it is changed to Mr Green in the change murderer function, but within that function there is a plot twist where the constant is changed for murdere of Mrs White.

// Episode Seven //

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode Seven: The murderer is intially declared as Professor plum, but this is a let which can and is changed to Mr Green using the changeMurderer function. There is then a plot twist and an unexpected outcome, but the order in which they occur means that plot twist and a let are essentially over riden by the constant of Mr Green.

// Episode Eight //

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Episode Eight: The weapon is a candle stick. It is possible to change the scenario of a constant. In this case it changes location, and then calls an unexpectedOutcome, this unexpected outcome changes the murder weapon to a candle stick. There is then a plot twist but only for location.

// Episode Nine //

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Episode Nine: Professor Plum is the murderer. He is declared as the murderer and is then called in the const declareMurderer function. The if statement does not make a change so therefore remains as Professor Plum.

// End //
