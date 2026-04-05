//System of evaluating the person
var dataset = {
    name: function() {
        localStorage.getItem("usr");
    },
    emotional:{
        humor:null,
        ansiedade:null,
    },
    energia:{
        sono:null,
    },
};

//Dividir em partes
//emocional, energia (talvez automatic tracking), comportamento (em forma de jogo talvez)
//varia de 0 a variável "variation" abaixo.
var variation = 5;

var currentSection = 1;

function loadTesteAvaliativo(){
    uiShow('clearAll');
    loadEmotional("start");
    return currentSection = 1;
};

var emotionalSections = {
    A:{
        name: "Humor Geral",
        question: "Quão positivo foi seu humor hoje?",
        evaluate: true
    },
    B:{
        name: "Ansiedade/Tensão",
        question: "O quanto você se sentiu nervoso, tenso ou preocupado hoje?",
        evaluate: true
    },
};

function loadEmotional(ans){
    console.log(dataset);
    var section, question, evaluate;
    if(ans=='start'){
        section = emotionalSections.A.name;
        question = emotionalSections.A.question;
        evaluate = emotionalSections.A.evaluate;
        return uiShow(section, question, evaluate);
    };
    if(currentSection==1){
        dataset.emotional.humor = ans;
        currentSection = 2;
        section = emotionalSections.B.name;
        question = emotionalSections.B.question;
        evaluate = emotionalSections.B.evaluate;
        return uiShow(section, question, evaluate);
    };
};
