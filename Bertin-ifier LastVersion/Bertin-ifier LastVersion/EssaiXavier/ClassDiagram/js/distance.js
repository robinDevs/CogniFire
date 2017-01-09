/**
 * Created by lepallex on 10/02/15.
 */


Distance = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: Colors.colorLevels[table[i].value][table[i].distance]};
        UmlClassStrategy.bgColor = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addColorsInLegend(property, realTable, choices.defaultValue);
    },

    addColorsInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

        var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
        domHelp.addText(intitule, property + " >> Distance");

        function ajoutCase(color, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            var carre = domHelp.addElement(_case, "span", "class", "color distance");
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

Distance.choices.priority = {
    defaultValue: "rgb(255,255,255)",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.blue, distance: veryLight},
        {threshold: 2, value: Colors.blue, distance: light},
        {threshold: 4, value: Colors.blue, distance: saturated},
        {threshold: 6, value: Colors.blue, distance: dark},
        {threshold: 8, value: Colors.blue, distance: veryDark}
    ]
}

Distance.choices.difficulty = {
    defaultValue: "rgb(255,255,255)",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.red, distance: veryLight},
        {threshold: 4, value: Colors.red, distance: saturated},
        {threshold: 8, value: Colors.red, distance: veryDark}
    ]

};
