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
  $('.bouncyDancer').mouseover(function(event) {
    $('.bouncyDancer').css('background-color', 'orange');
  });
};

//lineup

MakeBouncyDancer.prototype.lineup = function() {
  this.$node.css({
    'position': 'relative',
    'top': '30%',
    'left': '50%',
    'margin-le5ft': function() { return -$(this).outerWidth() / 2; },
    'margin-top': function() { return -$(this).outerHeight() / 2; },
  });
};