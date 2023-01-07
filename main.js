play1 = localStorage.getItem("player_1");
play2 = localStorage.getItem("player_2");
pscore1 = 0;
pscore2 = 0;
document.getElementById("player_name1").innerHTML = play1 + ":";
document.getElementById("player_name2").innerHTML = play2 + ":";

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    answer = parseInt(number1) * parseInt(number2);
    question = "<h4>"+number1+"X"+number2+"</h4>";
    inputbox = "<br>Answer : <input type='text' id='i_check'></input>";
    checkbox = "<br><br><button class='btn btn-info' onclick='check() value='Check'>Check</button>"
    row = question+inputbox+checkbox;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("i_check").value
    if(get_answer == answer){
        if(answer_turn == "player1"){
            newplay1 = pscore1 + 1;
            document.getElementById("player1_score").innerHTML = newplay1;
        }
        else{
            newplay2 = pscore2 + 1;
            document.getElementById("player2_score").innerHTML = newplay2;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
    }
    else{
        question_turn = "player_1"
    }
}


