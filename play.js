player1name=localStorage.getItem("Player1");
player2name=localStorage.getItem("Player2");
player1score=0;
player2score=0;
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player1_name").innerHTML=player1name;
document.getElementById("player2_name").innerHTML=player2name;
document.getElementById("player_question").innerHTML="Question Turn- "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2name;
function send(){
    number1=document.getElementById("num1").value;
    number2=document.getElementById("num2").value;
    answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"x"+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}
question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == answer)	
	{
		if(answer_turn == "player1")
		{
			player1score = player1score +1;
		    document.getElementById("player1_score").innerHTML = player1score;
		}
		else 
		{
			player2score = player2score +1;
		    document.getElementById("player2_score").innerHTML = player2score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name ;
	}

    document.getElementById("output").innerHTML = "";
}