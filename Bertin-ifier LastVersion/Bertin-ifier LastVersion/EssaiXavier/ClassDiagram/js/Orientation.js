/**
 * Created by lepallex on 10/02/15.
 */


Orientation = {

    associateToAProperty: function (property) {
        var realTable = [];
        console.log(debut);
        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: table[i].value};
        UmlClassStrategy.angle = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        this.addOrientationInLegend(property, realTable, choices.defaultValue);
    },

    addOrientationInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

       var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
       domHelp.addText(intitule, property + " >> Angle");

        function ajoutCase(angle, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "orientation");
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
            carre.style.WebkitTransform="rotate("+angle+"deg)";
            console.log(carre.style.transform);
        }

        ajoutCase(0, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

Orientation.choices.priority = {
    defaultValue: 0,
    table: [
        {threshold: 1, value: 10},
        {threshold: 2, value: 25},
        {threshold: 4, value: 45},
        {threshold: 6, value: 65},
        {threshold: 8, value: 90}
    ]
}

Orientation.choices.difficulty = {
    defaultValue: 0,
    table: [
        {threshold: 1, value: 0},
        {threshold: 4, value: 12},
        {threshold: 8, value: 45}
    ]
};
