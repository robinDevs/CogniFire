/**
 * Created by lepallex on 05/02/15.
 */

UmlClassStrategy = {
    defaultBgColor: function (v) {
        return "white";
    },
    defaultBorderColor: function (v) {
        return "#000000";
    },
    defaultBorderWidth: function (v) {
        return 1;
    },
    defaultAngle: function (v) {
        return 0;
    },
    defaultScale: function(v){
        return 1;
    },
    defaultBorderLineWidth: function(v){
        return 1;
    },
    defaultLineColor: function(v){
        return "black";
    },
    defaultLineDistance: function(v){
        return "black";
    },
    defaultTextStyle: function(v){
        return "bold 20px sans-serif";
},
    defaultTextColor: function(v){
        return "black";
    },
    defaultTextUnderline: function(v){
        return false;
    },
    defaultAttributesvisiblity: function(v){
        return true;
    },
    defaultOperationsTextStyle: function(v){
        return " 11px sans-serif";
    },
    defaultOperationsColor: function(v){
        return " black";
    },

    defaultOperationsvisiblity: function(v){
        return true;
    },
    defaultAttributesTextStyle: function(v){
        return " 11px sans-serif";
    },
    defaultAttributesColor: function(v){
        return " black";
    }


};

UmlClassStrategy.bgColor = UmlClassStrategy.defaultBgColor;
UmlClassStrategy.borderColor = UmlClassStrategy.defaultBorderColor;
UmlClassStrategy.borderWidth = UmlClassStrategy.defaultBorderWidth;
UmlClassStrategy.borderLineWidth = UmlClassStrategy.defaultBorderLineWidth;
UmlClassStrategy.lineColor = UmlClassStrategy.defaultLineColor;
UmlClassStrategy.lineDistance = UmlClassStrategy.defaultLineDistance;
UmlClassStrategy.angle = UmlClassStrategy.defaultAngle;
UmlClassStrategy.textStyle = UmlClassStrategy.defaultTextStyle;
UmlClassStrategy.textColor = UmlClassStrategy.defaultTextColor;
UmlClassStrategy.scale = UmlClassStrategy.defaultScale;
UmlClassStrategy.isUnderline = UmlClassStrategy.defaultTextUnderline;
UmlClassStrategy.operationsTextStyle = UmlClassStrategy.defaultOperationsTextStyle;
UmlClassStrategy.attributesVisiblity = UmlClassStrategy.defaultAttributesvisiblity;
UmlClassStrategy.operationsColor=UmlClassStrategy.defaultOperationsColor;
UmlClassStrategy.attributesTextStyle = UmlClassStrategy.defaultAttributesTextStyle;
UmlClassStrategy.operationsVisiblity = UmlClassStrategy.defaultOperationsvisiblity;
UmlClassStrategy.attributesColor=UmlClassStrategy.defaultAttributesColor;


difficultyInWidth = [
    {threshold: 1, value: 1},
    {threshold: 4, value: 2},
    {threshold: 8, value: 4}
];

difficultyInAngle = [
    {threshold: 1, value: 0},
    {threshold: 4, value: 12},
    {threshold: 8, value: 45}
];



//associateBackgroundColorToAProperty("priority", priorityInColors, "white", saturated);
//UmlClassStrategy.bgColor=createFunctionForThresholdValues("priority",priorityInColors,"white");
//addColorsInLegend("priority",priorityInColors,"white");
//UmlClassStrategy.borderColor=createFunctionForThresholdValues("difficulty",priorityInColors,"white");
//UmlClassStrategy.borderWidth=createFunctionForThresholdValues("difficulty",difficultyInWidth,1);
//UmlClassStrategy.angle=createFunctionForThresholdValues("difficulty",difficultyInAngle,0);



