var MakeDancer = function(top, left, timeBetweenSteps, node) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // this.$node = $('<div class="bouncyDancer"></div><div class="blinkDancer"></div></div>');
  this.$node = node;
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

