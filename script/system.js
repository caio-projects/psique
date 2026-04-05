//System of evaluating the person

var dataset = {
    name: function() {
        localStorage.getItem("usr");
    },
    emotional:{
        humor:null,
    },
    energia:{
        sono:null,
    },
};

//Dividir em partes
//emocional, energia (talvez automatic tracking), comportamento (em forma de jogo talvez)
//varia de 0 a 10

function loadTesteAvaliativo(){
    uiShow('clearAll');
    loadEmotional();
};

function loadEmotional(ans){
    var section, question;
    section = "Humor Geral"
    question = "Quão positivo foi seu humor hoje?"
    if(!ans) return uiShow(section, question, true);
};
