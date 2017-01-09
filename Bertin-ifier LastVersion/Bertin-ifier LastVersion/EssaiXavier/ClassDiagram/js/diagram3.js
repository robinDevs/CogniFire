var $ = go.GraphObject.make;
var diagram = $(go.Diagram,"ClassDiagramDiv",
    {
        initialContentAlignment : go.Spot.Center,
        "undoManager.isEnabled" : true
    }
);

var criteria="";
var debut=0;
var classNumber=6;
var attributesVisibility=0;
var forelayer = diagram.findLayer("Foreground");
diagram.addLayerBefore($(go.Layer, { name: "red" }), forelayer);
diagram.addLayerBefore($(go.Layer, { name: "blue" }), forelayer);
diagram.addLayerBefore($(go.Layer, { name: "green" }), forelayer);
umlClassTemplate =
    $ (go.Node,"Auto", new go.Binding("angle", "", function (x) {return UmlClassStrategy.angle(x);}),
        new go.Binding("layerName", "color"),
        $(go.Shape,"Rectangle",{ isPanelMain : true},
           // new go.Binding("fill", "color"),
            new go.Binding("fill", "", function (x) {if (debut<classNumber) {debut++;return x.color} else {return UmlClassStrategy.bgColor(x);}}),
            new go.Binding("stroke", "", function (x) {return UmlClassStrategy.borderColor(x);}),
            new go.Binding("strokeWidth", "", function (x) {return UmlClassStrategy.borderWidth(x);})
            ),
        $(go.Panel, "Vertical",
            $(go.TextBlock, "ClassName",
                { margin : 8, editable: true},
                new go.Binding("isUnderline", "", function (x) {return UmlClassStrategy.isUnderline(x)}),
                new go.Binding("stroke", "", function (x) {return UmlClassStrategy.textColor(x);}),
                new go.Binding("font", "", function (x) {return UmlClassStrategy.textStyle(x);}),
                new go.Binding("text","name")),
            $(go.Shape, "LineH",
                {height : 2, stretch : go.GraphObject.Fill},
                    new go.Binding("stroke", "", function (x) {return UmlClassStrategy.lineColor(x);}),
                    //new go.Binding("strokeWidth", "", function (x) {return UmlClassStrategy.borderWidth(x);}),
                    new go.Binding("strokeWidth", "", function (x) {return UmlClassStrategy.borderLineWidth(x);})
            ),
            $(go.Panel, "Vertical",
                {stretch : go.GraphObject.Fill},
                new go.Binding("itemArray", "attributes"),
                {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate:
                        $(go.Panel, "Auto",
                            { margin: 2 },
                            $(go.TextBlock, { margin : 8, stroke : "black", font : " 11px sans-serif"},
                                new go.Binding("visible", "", function (v) {console.log(UmlClassStrategy.attributesVisiblity);return UmlClassStrategy.attributesVisiblity}),
                                new go.Binding("stroke", "", function (v) {console.log(UmlClassStrategy.attributesColor);return UmlClassStrategy.attributesColor}),
                                new go.Binding("font", "", function (v) {console.log(UmlClassStrategy.attributesTextStyle);return UmlClassStrategy.attributesTextStyle}),
                                new go.Binding("text", "", function (v) {return v.type+" "+ v.name}),
                                { margin: 2})
                        )  // end of itemTemplate
                }),
            $(go.Shape, "LineH",
                {height : 2, stretch : go.GraphObject.Fill},
                    //new go.Binding("stroke", "", function (x) {return UmlClassStrategy.borderColor(x);}),
                    new go.Binding("stroke", "", function (x) {return UmlClassStrategy.lineColor(x);}),
                    new go.Binding("strokeWidth", "", function (x) {return UmlClassStrategy.borderLineWidth(x);})
            ),
            $(go.Panel, "Vertical",
                new go.Binding("itemArray", "operations"),
                {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate:
                        $(go.Panel, "Auto",
                            { margin: 2 },
                            $(go.TextBlock, { margin : 8},
                                new go.Binding("visible", "", function (v) {console.log(UmlClassStrategy.operationsVisiblity);return UmlClassStrategy.operationsVisiblity}),
                                new go.Binding("stroke", "", function (v) {console.log(UmlClassStrategy.operationsColor);return UmlClassStrategy.operationsColor}),
                                new go.Binding("font", "", function (v) {console.log(UmlClassStrategy.operationsTextStyle);return UmlClassStrategy.operationsTextStyle}),
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

var templatesMap = new go.Map("string", go.Part);
templatesMap.add("umlClass", umlClassTemplate);
templatesMap.add("", diagram.nodeTemplate);
diagram.nodeTemplateMap = templatesMap;


var groupTemplatesMap = new go.Map("string", go.Group);
groupTemplatesMap.add("umlPackage", umlPackageTemplate);
groupTemplatesMap.add("", diagram.groupTemplate);
diagram.groupTemplateMap = groupTemplatesMap;

association =
    $(go.Link, {routing: go.Link.AvoidsNodes},
        $(go.Shape),
        $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.2 }, new go.Binding("text", "left")),
        $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.5 }, new go.Binding("text", "mid")),
        $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.8 }, new go.Binding("text", "right"))
    );


agregation = $(go.Link, {routing: go.Link.AvoidsNodes},
    $(go.Shape),
    $(go.Shape, { fromArrow: "Diamond" , fill:"white"}),
    $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.2 }, new go.Binding("text", "left")),
    $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.5 }, new go.Binding("text", "mid")),
    $(go.TextBlock, { segmentIndex: 0, segmentFraction: 0.8 }, new go.Binding("text", "right"))
);


var linkTemplatesMap = new go.Map("string", go.Link);
linkTemplatesMap.add("association", association);
linkTemplatesMap.add("agregation", agregation);
linkTemplatesMap.add("", diagram.linkTemplate);
diagram.linkTemplateMap = linkTemplatesMap;

//customer.group="Omega";
//customer.category="umlClass";

var nodeDataArray = data.umlClasses;
var linkDataArray = data.umlLinks;
function callAddAssociateToProperty(){
    if(document.getElementById('priorityRadio-btn').checked){
        criteria="priority";
    }else if(document.getElementById('difficultyRadio-btn').checked){
        criteria="difficulty"
    }

}
toggleVisible = function(layername, e) {
    var layer = diagram.findLayer(layername);
    if (layer !== null) layer.visible = e.checked;
};

 setVisibility = function(v){
     if(v.visibility=='private'){UmlClassStrategy.visible=true;}
     else {UmlClassStrategy.visible=false}
     DecorateDiagram.updateDiagramTemplates();
 }


    /*[
    customer,
    { key: "Alpha" },
    { key: "Beta", group: "Omega" },
    { key: "Gamma", group: "Omega" },
    { key: "Omega", isGroup: true, category : "umlPackage" },
    { key: "Delta" }
];*/
/*
var linkDataArray = [
    { from: "Alpha", to: "Beta" },  // from outside the Group to inside it
    { from: "Beta", to: "Gamma" },  // this link is a member of the Group
    { from: "Omega", to: "Delta" }  // from the Group to a Node
];*/
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);