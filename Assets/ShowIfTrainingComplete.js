#pragma strict

var trainingId:int;

function Update () {
	if(!Globals.trainingComplete[trainingId]){
		GetComponent(DynamicText).SetText("");
	} else {
		GetComponent(DynamicText).SetText("✓");
	}
}
