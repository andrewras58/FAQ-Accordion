let expandButtons = Array.from(document.getElementsByClassName("expand"));
let closeButtons = Array.from(document.getElementsByClassName("close"));
let answers = Array.from(document.getElementsByClassName("answer"));

if (expandButtons.length !== closeButtons.length || expandButtons.length !== answers.length || answers.length !== closeButtons.length){
    throw new Error(`not enough buttons: ${expandButtons.length} expanders ${closeButtons.length} closers ${answers.length} answers`);
}

for (let i=0; i < expandButtons.length; i++){
    expandButtons[i].addEventListener('click', e=>{
        expandButtons[i].style.display = "none";
        closeButtons[i].style.display = "block";
        answers[i].style.display = "block";
    });
    
    closeButtons[i].addEventListener('click', e=>{
        expandButtons[i].style.display = "block";
        closeButtons[i].style.display = "none";
        answers[i].style.display = "none";
    });
}