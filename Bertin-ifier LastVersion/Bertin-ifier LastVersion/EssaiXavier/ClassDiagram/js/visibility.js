/**
 * Created by lepallex on 10/02/15.
 */


Visibility = {

    setAttributesVisibility: function (constraint) {
        UmlClassStrategy.attributesVisiblity = constraint;
        if(UmlClassStrategy.operationsVisiblity==false) {UmlClassStrategy.operationsVisiblity=true}
        UmlClassStrategy.operationsTextStyle=" bold 15px sans-serif";
        UmlClassStrategy.operationsColor="red";
        DecorateDiagram.updateDiagramTemplates();
    },
    setOperationsVisibility: function (constraint) {
        if(UmlClassStrategy.attributesVisiblity==false) {UmlClassStrategy.attributesVisiblity=true}
        UmlClassStrategy.operationsVisiblity = constraint;
        UmlClassStrategy.attributesTextStyle=" bold 15px sans-serif";
        UmlClassStrategy.attributesColor="red";
        DecorateDiagram.updateDiagramTemplates();
    }
}
