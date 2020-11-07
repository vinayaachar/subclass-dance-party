$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    if (window.dancers.length > 1) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (i !== window.dancers.length - 1) {
          var a = window.dancers[i].top - window.dancers[i + 1].top;
          var b = window.dancers[i].left - window.dancers[i + 1].left;
          var c = Math.sqrt( a * a + b * b );
          if (c < 300) {
            // do a jquery fadeOut
            window.dancers[i].$node.fadeOut('slow', 'linear', function() {
              window.dancers[i].$node.append('<strong>Dancer Fading Out</strong>');
            });
          }
        }
      }
    }

  });
  $('.addLineUpButton').on('click', function(event) {
    // loop through the dancer methods
    for (var i = 0; i < window.dancers.length; i++) {
      // we will call each dancer.lineup()
      window.dancers[i].lineup();
    }
  });

});

