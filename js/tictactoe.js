$(document).ready(function() {

  var player = 1;
  var board = [
              [1,2,4],
              [8,16,32],
              [64,128,256]
              ];
  var chosenSquares = {
                'x': [[],[],[]],
                'o': [[],[],[]]
                      };
  var win = [7,56,73,84,146,273,292,448];
  var score = {"x":0, "o":0};



  function isEven(value) {
    if (value%2 == 0)
    return true;
    else
    return false;
  }


  $('td').one('mousemove', function() {
    var mouseID = '#'+this.id;

    $(mouseID).one('click', function() {

      if(isEven(player)){
        $("img", this).attr('src', 'images/o.jpg');
        player = 1;

        var val = $(this).attr('class');
        console.log(val);


      } else {
        $("img", this).attr('src', 'images/x.jpg');
        player = 2;

        var val = $(this).attr('class');
        console.log(val);

      };
    });

  });








  // var availSquare = [0,1,2,3,4,5,6,7,8];
  // var ranSquare = availSquare [Math.floor(Math.random()*availSquare,length)];
  //
  // if (ranSquare != );


  //
  // if( ){
  //
  // }
  // alert("You Win");
  //
  // win = function(score) {
  //   for ( var i=0; i < win.length; i+=1) {
  //     if ((win[i] & score) === win[i]) {
  //
  //     }
  //
  //   }
  // }
  //
  //
  //











});
