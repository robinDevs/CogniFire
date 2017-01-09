var $ = go.GraphObject.make;
var diagram = $(go.Diagram,"ClassDiagramDiv",
    {
        initialContentAlignment : go.Spot.Center,
        "undoManager.isEnabled" : true
    }
);

diagram.nodeTemplate =
    $ (go.Node,"Auto",
        $(go.Shape,"Rectangle",{ isPanelMain : true, fill: "#FFFF00",  stroke : "#FF0000"}),
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

diagram.groupTemplate =
    $(go.Group, "Vertical",
        $(go.Panel, "Vertical",{defaultAlignment: go.Spot.Left},
            $(go.Panel, "Auto",
                $(go.Shape, "Rectangle",
                    { parameter1: 14,
                        fill: "rgba(128,128,128,0.33)" }),
                $(go.TextBlock, "PackageName",
                    { margin : 8, stroke : "black", font : "bold 11px sans-serif"},
                    new go.Binding("text","key"))
            ),
            $(go.Panel, "Auto",
                $(go.Shape, "Rectangle",  // surrounds the Placeholder
                    { parameter1: 14,
                        fill: "rgba(128,128,128,0.33)" }),
                $(go.Placeholder,    // represents the area of all member parts,
                    { padding: 5})  // with some extra padding around them
            )
        )
    );



customer.group="Omega";

var nodeDataArray = [
    customer,
    { key: "Alpha" },
    { key: "Beta", group: "Omega" },
    { key: "Gamma", group: "Omega" },
    { key: "Omega", isGroup: true },
    { key: "Delta" }
];
var linkDataArray = [
    { from: "Alpha", to: "Beta" },  // from outside the Group to inside it
    { from: "Beta", to: "Gamma" },  // this link is a member of the Group
    { from: "Omega", to: "Delta" }  // from the Group to a Node
];
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);