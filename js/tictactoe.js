$(document).ready(function() {

  var player = 1;
  var count = 0;
  var x = [];
  var o = [];
  var win = [7,56,73,84,146,273,292,448];
  // var win = [[1,2,4],[8,16,32],[64,128,256],[1,8,64],[2,16,128],[4,32,256],[1,16,256],[4,16,64]];

  function isEven(value) {
    if (value%2 == 0)
    return true;
    else
    return false;
  }

  $('td').one('mousemove', function() {
    var mouseID = this.id;
    $('#'+mouseID).one('click', function() {

      if(isEven(player)){
        $("img", this).attr('src', 'images/o.jpg');

        // Adds value to array
        var cc = parseInt($('td#'+mouseID).attr('class'));
        o.push(cc);

        console.log(isWinner(o));

        player = 1;
        count++;

      } else {
        $("img", this).attr('src', 'images/x.jpg');

        //Adds value to array
        var cc = parseInt($('td#'+mouseID).attr('class'));
        x.push(cc);

        console.log(isWinner(x));

        player = 2;
        count++;
      };
    });
  });

  var isWinner = function(array){
    $.each(win, function(i,val){
      if (array[0]+array[1]+array[2] === val) {

        } else if
        (array[0]+array[1]+array[3] === val) {

        } else if
        (array[0]+array[1]+array[4] === val) {

        } else if
        (array[0]+array[2]+array[3] === val) {

        } else if
        (array[0]+array[2]+array[4] === val) {

        } else if
        (array[0]+array[3]+array[4] === val) {

        } else if
        (array[1]+array[2]+array[3] === val) {

        } else if
        (array[1]+array[2]+array[4] === val) {

        } else if
        (array[2]+array[3]+array[4] === val) {

        };

      });

    };
});

// function reset(grid){
//   grid.find('td').each(function() {
//     $(this).removeClass('class').removeClass('');
//   });
// }
