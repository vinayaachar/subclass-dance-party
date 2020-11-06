var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
};
// prototype
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

//set constructor
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// Make blinky dance method step
MakeBlinkyDancer.prototype.step = function() {
  // Call parent method from subclass using call method
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

