var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="blinkyDancer"></div>');
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

//lineup method
MakeBlinkyDancer.prototype.lineup = function() {
  console.log(this.$node.length);
  this.$node.css({
    'position': 'relative',
    'left': '50%',
    'top': '50%',
    'margin-left': function() { return -$(this).outerWidth() / 2; },
    'margin-top': function() { return -$(this).outerHeight() / 2; },
  });
};