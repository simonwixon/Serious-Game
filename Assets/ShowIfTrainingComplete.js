#pragma strict

var trainingId:int;

function Start () {
	if(!Globals.trainingComplete[trainingId]){
		gameObject.SetActive(false);
	}
}
