function uiShow(main, second, evalBool){
    var appUI, firstParagraph, secondParagraph, evaluator, evaluatorOutput;
    appUI = document.getElementsByClassName('sections-ui')[0];

    if (main == 'clearAll'){
        appUI.replaceChildren();
        return;
    };

    firstParagraph = document.createElement('h1');
    firstParagraph.textContent = main;

    secondParagraph = document.createElement('p');
    secondParagraph.textContent = second;

    evaluator = document.createElement('input');
    evaluator.type = 'range';
    evaluator.min = 0;
    evaluator.max = 10;
    evaluator.id = "evaluator";
    evaluator.name = "evaluator";
    evaluatorOutput = document.createElement('output');
    evaluatorOutput.for = "evaluator";
    evaluatorOutput.value = evaluator.value;
    evaluator.oninput = function() {
        evaluatorOutput.value = this.value;
    };

    appUI.appendChild(firstParagraph);
    appUI.appendChild(secondParagraph);
    if(evalBool==true){
        appUI.appendChild(evaluator);
        appUI.appendChild(evaluatorOutput);
    };
};