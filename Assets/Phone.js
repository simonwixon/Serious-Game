#pragma strict

var emergencyScreen:GameObject;
var noEmergencyScreen:GameObject;

function Start () {
	Globals.trainingComplete[0]=true;
	if(Globals.trainingComplete[0] && !Globals.emergencyComplete[0]){
		noEmergencyScreen.SetActive(false);
		emergencyScreen.SetActive(true);
	}
}

function Update () {

}