/**
 * Created by lepallex on 10/02/15.
 */


BackgroundColor = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: Colors.colorLevels[table[i].value][choices.hueLevel]};
        UmlClassStrategy.bgColor = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addColorsInLegend(property, realTable, choices.defaultValue);
    },

    addColorsInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

        var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
        domHelp.addText(intitule, property + " >> backgroundColor");

        function ajoutCase(color, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            var carre = domHelp.addElement(_case, "span", "class", "square");
            carre.style.backgroundColor = color;
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
        }

        ajoutCase("white", "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

BackgroundColor.choices.priority = {
    defaultValue: "rgb(255,255,255)",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.blue},
        {threshold: 2, value: Colors.cyan},
        {threshold: 4, value: Colors.green},
        {threshold: 6, value: Colors.yellow},
        {threshold: 8, value: Colors.red},
    ]
}

BackgroundColor.choices.difficulty = {
    defaultValue: "rgb(255,255,255)",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.blue},
        {threshold: 4, value: Colors.yellow},
        {threshold: 8, value: Colors.red}
    ]
};
