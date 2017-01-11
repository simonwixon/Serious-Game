#pragma strict

var step:int;
var congratulations:GameObject;

function Start () {

}

function Update () {
	if(step==8){
		Globals.trainingComplete[0] = true;
		congratulations.SetActive(true);
	}
}