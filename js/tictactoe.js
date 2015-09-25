$(document).ready(function() {

  var moves = 0,
      SIZE = 3,
      turn = "X",
      score = {
            "X": 0,
            "O": 0
              },
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
          alert(turn + " wins!");
          location.reload(true);
      } else if (moves === SIZE * SIZE){
          alert("Cat\u2019s game!");
          location.reload(true);
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
});
