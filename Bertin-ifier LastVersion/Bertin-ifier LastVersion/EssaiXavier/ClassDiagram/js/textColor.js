/**
 * Created by lepallex on 10/02/15.
 */


TextColor = {

    associateToAProperty: function (property) {
        var realTable = [];

        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: Colors.colorLevels[table[i].value][choices.hueLevel]};
        UmlClassStrategy.textColor = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        //this.addBorderColorInLegend(property, realTable, choices.defaultValue);
    },

    addBorderColorInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

       var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
       domHelp.addText(intitule, property + " >> line height");

        function ajoutCase(color, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "text");
            domHelp.addElement(_case, "BR");
            value.style.style="italic"
            domHelp.addText(carre, value);
            //carre.style.borderColor=color;
        }

        ajoutCase(defaultValue, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

TextColor.choices.priority = {
    defaultValue: "black",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.yellow},
        {threshold: 2, value: Colors.green},
        {threshold: 4, value: Colors.cyan},
        {threshold: 6, value: Colors.purple},
        {threshold: 8, value: Colors.blue}
    ]
}

TextColor.choices.difficulty = {
    defaultValue: "black",
    hueLevel: saturated,
    table: [
        {threshold: 1, value: Colors.cyan},
        {threshold: 4, value: Colors.blue},
        {threshold: 8, value: Colors.purple}
    ]
};
