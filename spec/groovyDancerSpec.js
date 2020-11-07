describe('groovyDancer', function() {

  var groovyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    groovyDancer = new MakeGroovyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(groovyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node groove', function() {
    sinon.spy(groovyDancer.$node, 'animate');
    groovyDancer.step();
    expect(groovyDancer.$node.animate.called).to.be.true;
  });
});