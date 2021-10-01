player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1_score = 0
player2_score = 0

document.getElementById("player_1").innerHTML = player1 + ":";
document.getElementById("player_2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1;
document.getElementById("player_answer").innerHTML = player2;

function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    actual_answer = parseInt(num1) * parseInt(num2);

    question_word = "<h4> " + num1 + "X" + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
answer_turn = "p2";
question_turn = "p1";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "p1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    } else {
        if (answer_turn == "p1") {
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "p1") {
        question_turn = "p2";
        document.getElementById("player_question").innerHTML = player2;
    } else {
        question_turn = "p1";
        document.getElementById("player_question").innerHTML = player1;
    }
    if (answer_turn == "p1") {
        answer_turn = "p2";
        document.getElementById("player_answer").innerHTML = player2;
    } else {
        answer_turn = "p1";
        document.getElementById("player_answer").innerHTML = player1;
    }
    document.getElementById("output").innerHTML = ""
}
