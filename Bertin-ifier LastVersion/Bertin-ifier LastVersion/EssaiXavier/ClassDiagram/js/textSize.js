/**
 * Created by lepallex on 10/02/15.
 */


TextSize = {

    associateToAProperty: function (property) {
        var realTable = [];
        var choices = this.choices[property];
        var table = choices.table;
        for (var i = 0; i < table.length; i++)
            realTable[i] = {threshold: table[i].threshold, value: table[i].value};
        UmlClassStrategy.textStyle = DecorateDiagram.createFunctionForThresholdValues(property, realTable, choices.defaultValue);
        DecorateDiagram.updateDiagramTemplates();
        console.log(UmlClassStrategy.textStyle);
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
        }

        ajoutCase(defaultValue, "null");
        for (var i = 0; i < table.length; i++) {
            ajoutCase(table[i].value, table[i].threshold);
        }
    },

    choices: {}
}

TextSize.choices.priority = {
    defaultValue: "20px sans-serif",
    table: [
        {threshold: 1, value: "bold 22px sans-serif"},
        {threshold: 2, value: "bold 25px sans-serif"},
        {threshold: 4, value: "bold 28px sans-serif"},
        {threshold: 6, value: "bold 31px sans-serif"},
        {threshold: 8, value: "bold 35px sans-serif"}
    ]
}

TextSize.choices.difficulty = {
    defaultValue: "20px sans-serif",
    table: [
        {threshold: 1, value: "bold 22px sans-serif"},
        {threshold: 4, value: "bold 28px sans-serif"},
        {threshold: 8, value: "bold 35px sans-serif"}
    ]
};
