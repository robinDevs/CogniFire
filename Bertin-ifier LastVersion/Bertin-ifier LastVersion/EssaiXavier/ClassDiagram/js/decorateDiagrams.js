/**
 * Created by lepallex on 10/02/15.
 */

DecorateDiagram = {
    valueByThreshold: function (object) {
        console.log("for object " + object.key + " " + object.priority);
        console.log(this.property + " " + this.table);
        var value = this.defaultValue;
        console.log(value);
        for (var i = 0; i < this.table.length; i++) {
            if (object[this.property] >= this.table[i].threshold)
                value = this.table[i].value;
            else
                return value;
            console.log(value);
        }
        return value;
    },

    createFunctionForThresholdValues: function (property, table, defaultValue) {
        return this.valueByThreshold.bind({property: property, table: table, defaultValue: defaultValue});
    },


    updateDiagramTemplates: function () {
        diagram.startTransaction("templates changes");
        templatesMap = templatesMap.copy();
        diagram.nodeTemplateMap = templatesMap;
        diagram.commitTransaction("templates changes");
    }

}