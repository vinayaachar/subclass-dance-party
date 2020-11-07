var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="bouncyDancer"></div>');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};
MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);

//set constructor

MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

// make bouncy

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({height: '30px', opacity: '0.4'}, 'slow');
  this.$node.animate({width: '30px', opacity: '0.8'}, 'slow');
  this.$node.animate({height: '30px', opacity: '0.4'}, 'slow');
  this.$node.animate({width: '30px', opacity: '0.8'}, 'slow');
};

