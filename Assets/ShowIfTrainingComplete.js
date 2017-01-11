#pragma strict

var trainingId:int;

function Update () {
	if(!Globals.trainingComplete[trainingId]){
		GetComponent(SpriteRenderer).enabled=false;
	} else {
		GetComponent(SpriteRenderer).enabled=true;
	}
}
