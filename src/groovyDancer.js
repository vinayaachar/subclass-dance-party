var MakeGroovyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="groovyDancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};
// prototype
MakeGroovyDancer.prototype = Object.create(MakeDancer.prototype);

//set constructor
MakeGroovyDancer.prototype.constructor = MakeGroovyDancer;

// Make blinky dance method step
MakeGroovyDancer.prototype.step = function() {
  // Call parent method from subclass using call method
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '250px',
    opacity: '0.75',
    height: '100px',
    width: '50px'
  });
  $('.groovyDancer').mouseover(function(event) {
    $('.groovyDancer').css('visibility', 'hidden');
  });
};

MakeGroovyDancer.prototype.lineup = function() {
  this.$node.css({
    'position': 'relative',
    'top': '70%',
    'right': '50%',
    'margin-left': function() { return -$(this).outerWidth() / 2; },
    'margin-top': function() { return -$(this).outerHeight() / 2; },
  });
};