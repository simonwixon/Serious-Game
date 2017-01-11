#pragma strict

var emergencyScreen:GameObject;
var noEmergencyScreen:GameObject;

function Start () {
	if(Globals.trainingComplete[0] && !Globals.emergencyComplete[0]){
		noEmergencyScreen.SetActive(false);
		emergencyScreen.SetActive(true);
	}
}

function Update () {

}