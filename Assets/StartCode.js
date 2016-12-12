#pragma strict

var instructions:AnimateToPositionAfterDelay;

function Start () {
	if(Globals.firstPlay){
		Globals.firstPlay=false;
	} else {
		instructions.SkipToEnd();
		Destroy(gameObject);
	}
}

function Update () {

}