// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);// makerDander is superclass= func

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

//write class Dance
var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  //this.oldStep = this.step;
};
// prototype
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

//set constructor
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// Make blinky dance method step
MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

//var blinkyDancer = new MakeBlinkyDancer(top, left, timeBetweenSteps);

