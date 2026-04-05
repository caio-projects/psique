//System of evaluating the person
let dataset = {};

//Dividir em partes
//emocional, energia (talvez automatic tracking), comportamento (em forma de jogo talvez)
//varia de 0 a variável "variation" abaixo.
let variation = 5; //varia de 0 a 5.
let currentSection = 1; //Iara começar, primeira sessão

function loadTesteAvaliativo(){
    uiShow('clearAll');
    loadSection(1);
    return currentSection = 1;
};

let sections = {
    A:{
        name: "Humor Geral",
        question: "Quão positivo foi seu humor hoje?",
        evaluate: true,
        id:'humor',
    },
    B:{
        name: "Ansiedade/Tensão",
        question: "O quanto você se sentiu nervoso, tenso ou preocupado hoje?",
        evaluate: true,
        id:'ansiedade',
    },
    C:{
        name: "Irritabilidade",
        question: "Quão paciente ou 'curto' você esteve com os outros hoje?",
        evaluate: true,
        id:'irritabilidade',
    },
    D:{
        name: "Irritabilidade",
        question: "Quão paciente ou 'curto' você esteve com os outros hoje?",
        evaluate: true,
        id:'irritabilidade',
    },
};

const letters = [
  "", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function loadSection(num, ans){
    console.log(dataset);
    let section, question, evaluate;
    currentSection = num;

    let letter = letters[num];

    section = sections[letter].name;
    question = sections[letter].question;
    evaluate = sections[letter].evaluate;
    if(ans) dataset[sections[letters[num-1]].id] = ans;
    return uiShow(section, question, evaluate);
};
