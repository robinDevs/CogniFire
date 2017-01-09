/**
 * Created by lepallex on 10/02/15.
 */


StrokeLineSize = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: table[i].value};
        UmlClassStrategy.borderLineWidth = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addStrokeSizeInLegend(property, realTable, choices.defaultValue);
    },

    addStrokeSizeInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

       var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
       domHelp.addText(intitule, property + " >> Line Stroke");

        function ajoutCase(size, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "border");
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
            carre.style.backgroundColor = "black";
            carre.style.borderBottomWidth=size+"px";
            carre.style.height=size+"px";

        }

        ajoutCase(defaultValue, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

StrokeLineSize.choices.priority = {
    defaultValue: 1,
    table: [
        {threshold: 1, value: 1},
        {threshold: 2, value: 2},
        {threshold: 4, value: 3},
        {threshold: 6, value: 4},
        {threshold: 8, value: 5}
    ]
}

StrokeLineSize.choices.difficulty = {
    defaultValue: 1,
    table: [
        {threshold: 1, value: 1},
        {threshold: 4, value: 3},
        {threshold: 8, value: 6}
    ]
};
