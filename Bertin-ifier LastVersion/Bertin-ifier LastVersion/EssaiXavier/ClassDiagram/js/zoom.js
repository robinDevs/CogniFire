/**
 * Created by lepallex on 10/02/15.
 */


Zoom = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: table[i].value/2};
        UmlClassStrategy.defaultScale = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        console.log(UmlClassStrategy.defaultScale);
        DecorateDiagram.updateDiagramTemplates();
        this.addZoomInLegend(property, realTable, choices.defaultValue);
    },

    addZoomInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

        var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
        domHelp.addText(intitule, property + " >> line height");

        function ajoutCase(zoom, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "scale");
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
            carre.style.zoom=zoom*40+"%";
        }

        ajoutCase(defaultValue, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

Zoom.choices.priority = {
    defaultValue: 1,
    table: [
        {threshold: 1, value: 1},
        {threshold: 2, value: 3},
        {threshold: 4, value: 5},
        {threshold: 6, value: 7},
        {threshold: 8, value: 9}
    ]
}

Zoom.choices.difficulty = {
    defaultValue: 1,
    table: [
        {threshold: 1, value: 2},
        {threshold: 4, value: 5},
        {threshold: 8, value: 9}
    ]
};
