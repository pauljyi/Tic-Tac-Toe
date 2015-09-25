
$(document).ready(function() {

  var player1 = "",
      player2 = "",
      moves = 0,
      SIZE = 3,
      turn = "X",
      score = {"X": 0, "O": 0},
      wins = [7,56,73,84,146,273,292,448];

  $('td').one('mousemove', function(){
    var mouseID = this.id;
    $('#'+mouseID).one('click', function(){

      if(turn === "O") {
        $("img", this).attr('src', 'images/o.jpg');
        set(mouseID);

      } else {
        $("img", this).attr('src', 'images/x.jpg');
        set(mouseID);
      };
    });
  });

  function set (mouseID){
    moves += 1;
    //adds score to class
    score[turn] += parseInt($('td#'+mouseID).attr('class'));
    console.log(score[turn]);
    if (win(score[turn])) {
        if(turn == "X"){
          $('#p1win').css('display','inline');
        }else{
          $('#p2win').css('display','inline');
        }
          // location.reload(true);
      } else if (moves === SIZE * SIZE){
        $('#p1win').replaceWith('<h1>LOSER</h1>')
        $('#p2win').replaceWith('<h1>LOSER</h1>')
       // location.reload(true);
      } else {
          turn = turn === "X" ? "O" : "X";
      }
  }

  function win (score) {
    for (var i = 0; i < wins.length; i += 1){
        if ((wins[i] & score) === wins[i]){
            return true;
        }
    }
    return false;
  }

  $('#submit').click(function(){
    player1 = $('input#player1').val();
    player2 = $('input#player2').val();
    $('h1#p1name').replaceWith('<h1>'+player1+'</h1>');
    $('h1#p2name').replaceWith('<h1>'+player2+'</h1>');
    $('.player1name').css('visibility','visible');
    $('.player2name').css('visibility','visible');
    $('div#form').css('display','none');
    $('table').css('visibility','visible');
  });
});
