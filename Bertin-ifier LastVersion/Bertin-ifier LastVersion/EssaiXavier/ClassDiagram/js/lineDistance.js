/**
 * Created by lepallex on 10/02/15.
 */


LineDistance = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: Colors.colorLevels[table[i].value][table[i].distance]};
        UmlClassStrategy.lineColor = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addLineColorInLegend(property, realTable, choices.defaultValue);
    },

    addLineColorInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

        var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
        domHelp.addText(intitule, property + " >> Line Distance");

        function ajoutCase(color, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "border");
            carre.style.borderBottomColor = color;
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

LineDistance.choices.priority = {
    defaultValue: "black",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.blue, distance: veryLight},
        {threshold: 2, value: Colors.blue, distance: light},
        {threshold: 4, value: Colors.blue, distance: saturated},
        {threshold: 6, value: Colors.blue, distance: dark},
        {threshold: 8, value: Colors.blue, distance: veryDark}
    ]
}

LineDistance.choices.difficulty = {
    defaultValue: "rgb(255,255,255)",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.red, distance: veryLight},
        {threshold: 4, value: Colors.red, distance: saturated},
        {threshold: 8, value: Colors.red, distance: veryDark}
    ]

};
