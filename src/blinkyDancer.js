var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinkyDancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
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

