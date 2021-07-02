player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

question_turn="player1";
answer_turn="player2";
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;

function send(){
    get_no1=document.getElementById("no.1").value;
    get_no2=document.getElementById("no.2").value;
    product=get_no1*get_no2;
    
    console.log(product);

    question_word="<h4 id='word_display'>q."+get_no1+"*"+get_no2+"</h4>";
    Input="<br>ans: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+Input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check(){
    answer=document.getElementById("input_check_box").value;
  
    console.log(answer);
    if(answer==product){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;  
        } 
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn - "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn - "+player1_name;
    }
    if(answer_turn=="player1"){
       answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";

}