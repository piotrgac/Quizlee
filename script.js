var Questions = [
    1 = {
        pytanie: "Zachodni sąsiad Polski",
        answera: "Niemcy",
        answerb: "Włochy",
        answerc: "Rosja",
        answerd: "Ukraina",
    },
    2 = {
        pytanie: "Rok chrzestu Polski",
        answera: "996",
        answerb: "966",
        answerc: "699",
        answerd: "669",
    },
]

function getQuestion(){
    RandomNumber();
    document.getElementById(pytanie);
}

function RandomNumber(){
    rand = Math.floor(Math.Random(2+1));
}

alert(answera);