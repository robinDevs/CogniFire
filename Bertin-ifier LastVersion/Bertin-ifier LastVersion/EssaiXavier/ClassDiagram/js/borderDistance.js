/**
 * Created by lepallex on 10/02/15.
 */


BorderDistance = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: Colors.colorLevels[table[i].value][table[i].distance]};
        UmlClassStrategy.borderColor = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addColorsInLegend(property, realTable, choices.defaultValue);
    },

    addColorsInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

        var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
        domHelp.addText(intitule, property + " >>Border Distance");

        function ajoutCase(color, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            var carre = domHelp.addElement(_case, "span", "class", "square");
            carre.style.borderColor = color;
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
        }

        ajoutCase("black", "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

BorderDistance.choices.priority = {
    defaultValue: "black",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.purple, distance: veryLight},
        {threshold: 2, value: Colors.purple, distance: light},
        {threshold: 4, value: Colors.purple, distance: saturated},
        {threshold: 6, value: Colors.purple, distance: dark},
        {threshold: 8, value: Colors.purple, distance: veryDark}
    ]
}

BorderDistance.choices.difficulty = {
    defaultValue: "black",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.cyan, distance: veryLight},
        {threshold: 4, value: Colors.cyan, distance: saturated},
        {threshold: 8, value: Colors.cyan, distance: veryDark}
    ]

};
