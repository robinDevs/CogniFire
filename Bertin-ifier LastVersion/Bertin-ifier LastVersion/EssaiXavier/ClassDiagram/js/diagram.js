/**
 * Created by lepallex on 19/01/15.
 */

var $ = go.GraphObject.make;
var classDiagram = $(go.Diagram,"ClassDiagramDiv",
    {
        initialContentAlignment : go.Spot.Center,
        "undoManager.isEnabled" : true
    }
);

umlClassTemplate =
    $ (go.Part,"Auto",
        $(go.Shape,"Rectangle",{ fill: "#FFFF00",  stroke : "#FF0000"}),
        $(go.Panel, "Vertical",
            $(go.TextBlock, "ClassName",
                { margin : 8, stroke : "black", font : "bold 11px sans-serif"},
                new go.Binding("text","name")),
            $(go.Shape, "LineH", {height : 2, stroke : "#FF0000", stretch : go.GraphObject.Fill}),
            $(go.Panel, "Vertical",
                {stretch : go.GraphObject.Fill},
                new go.Binding("itemArray", "attributes"),
                {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate:
                        $(go.Panel, "Auto",
                            { margin: 2 },
                            $(go.TextBlock, { margin : 8, stroke : "black", font : " 11px sans-serif"},
                                new go.Binding("text", "", function (v) {return v.type+" "+ v.name}),
                                { margin: 2 })
                        )  // end of itemTemplate
                }),
            $(go.Shape, "LineH", {height : 2, stroke : "#FF0000",stretch : go.GraphObject.Fill}),
            $(go.Panel, "Vertical",
                new go.Binding("itemArray", "operations"),
                {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate:
                        $(go.Panel, "Auto",
                            { margin: 2 },
                            $(go.TextBlock, { margin : 8, stroke : "black", font : " 11px sans-serif"},
                                new go.Binding("text", "",
                                    function (v) {
                                        var parameters="";
                                        var first = true;
                                        for (p in v.parameters) {
                                            parameters+=(first?"":", ")+v.parameters[p].type+ " "+v.parameters[p].name+" ";
                                            first=false;
                                        }
                                        return v.returnType+" "+ v.name+"("+parameters+")";
                                    }),
                                { margin: 2 })
                        )  // end of itemTemplate
                })
        )
    );


umlPackageTemplate =
    $(go.Group, "Vertical",
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle",  // surrounds the Placeholder
                { parameter1: 14,
                    fill: "rgba(128,128,128,0.33)" }),
            $(go.Placeholder,    // represents the area of all member parts,
                { padding: 5})  // with some extra padding around them
        ),
        $(go.TextBlock,         // group title
            { alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif" },
            new go.Binding("text", "key"))
    );


var templatesMap = new go.Map("string", go.Part);
templatesMap.add("umlClass", umlClassTemplate);
templatesMap.add("", classDiagram.nodeTemplate);
classDiagram.nodeTemplateMap = templatesMap;


var groupTemplatesMap = new go.Map("string", go.Group);
groupTemplatesMap.add("umlPackage", umlPackageTemplate);
groupTemplatesMap.add("", classDiagram.groupTemplate);
classDiagram.groupTemplateMap = groupTemplatesMap;


var myModel = $(go.TreeModel);

myModel.nodeDataArray = [];//data.umlClasses;

classDiagram.model = myModel;

classDiagram.startTransaction("add node");
newnode = { key: "aPackage", category : "umlPackage", isGroup : true };
classDiagram.model.addNodeData(newnode);
customer.group="aPackage";
classDiagram.model.addNodeData(customer);
classDiagram.commitTransaction("add node");
