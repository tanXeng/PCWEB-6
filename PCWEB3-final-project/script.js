const jsConfetti = new JSConfetti();
let score = 0; 
let arr = ["1", "2", "3", "4", "5", "6"];
const qns = {
    "1": "In what year did Jacob Zuma become president of Africa?",
    "2": "Is Singapore the best country in South East Asia?",
    "3": "Will Donald Trump win this year's elections?",
    "4": "What is the speed of light in water, in Km/s?? (3 s.f)",
    "5": "Name a yellow fruit",
    "6": "<img src='image.jpg' alt='Image'/><h1>Find n</h1>"
};
const ans = {
    "1": "2009",
    "2": "yes",
    "3": "yes",
    "4": "225000",
    "5": "orange",
    "6": "0"
};

let currentQuestionNumber = null;

function isRight(usr_ans, correct_ans) {
    if (usr_ans.toLowerCase() === correct_ans.toLowerCase()) {
        jsConfetti.addConfetti({
            emojis: ['🤓☝️ erm actually'],
        });
        return true;
    } else {
        alert("YOU ARE COMPLETELY WRONG");
        jsConfetti.addConfetti({
            emojis: ['🤪', '💩', '🦍💨']
        });
        return false;
    }
}

function quiz() {
    document.getElementById("answer").value = "";
    if (arr.length === 0) {
       
        const container = document.getElementById("cont");
        container.innerHTML = `<h1>Your final score is: ${score}/6</h1>`;
        if (score < 6) {
            jsConfetti.addConfetti({
                emojis: ['💩']
            });
        } else {
            jsConfetti.addConfetti({
                emojis: ['𝕊𝕌𝕊𝕊𝕐 𝔹𝔸𝕂𝔸']
            });
        }
    
        currentQuestionNumber = null;
        return;
    }
   
    let rand = Math.floor(Math.random() * arr.length);
    let qn_num = arr[rand];
    let question = qns[qn_num];
    document.getElementById("qn").innerHTML = question;
    currentQuestionNumber = qn_num;
}

document.getElementById("btn").onclick = function(event) {
    event.preventDefault(); 

    if (isRight(document.getElementById("answer").value, ans[currentQuestionNumber])) {
            score++;
    }      
    let result = document.getElementById("result");
    result.innerHTML = `${score}/6`;        
    arr = arr.filter(qn => qn !== currentQuestionNumber);
    currentQuestionNumber = null; 
    quiz(); 
    }

window.onload = quiz;
