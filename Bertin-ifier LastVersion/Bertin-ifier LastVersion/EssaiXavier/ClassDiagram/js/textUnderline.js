/**
 * Created by lepallex on 10/02/15.
 */


TextUnderLine = {

    associateToAProperty: function (property) {
        var realTable = [];
        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: table[i].value};
        UmlClassStrategy.isUnderline = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        console.log(UmlClassStrategy.textUnderline);
        //this.addTextStyleInLegend(property, realTable, choices.defaultValue);
    },

    addTextStyleInLegend: function (property, table, defaultValue) {
        var legend = document.getElementById("legend");
        var rajout = domHelp.addElement(legend, "div");

       var intitule = domHelp.addElement(rajout, "div", "class", "intitule");
       domHelp.addText(intitule, property + " >> Class name Style");

        function ajoutCase(style, value) {
            var _case = domHelp.addElement(rajout, "div", "class", "enLigne");
            carre = domHelp.addElement(_case, "span", "class", "text");
            domHelp.addElement(_case, "BR");
            domHelp.addText(_case, value);
            carre.style.font = style;
            domHelp.addText(_case, "font");
        }

        ajoutCase(defaultValue, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

TextUnderLine.choices.priority = {
    defaultValue: true,
    table: [
        {threshold: 1, value: true},
        {threshold: 2, value: true},
        {threshold: 4, value: true},
        {threshold: 6, value: false},
        {threshold: 8, value: false}
    ]
}

TextUnderLine.choices.difficulty = {
    defaultValue: false,
    table: [
        {threshold: 1, value: true},
        {threshold: 4, value: true},
        {threshold: 8, value: false}
    ]
};
