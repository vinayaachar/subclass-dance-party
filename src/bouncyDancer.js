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
  this.$node.animate( {
    width: '10%',
    opacity: 0.4,
    marginLeft: '0.6in',
    fontSize: '3em',
    borderWidth: '10px'
  }, 1500);
};

