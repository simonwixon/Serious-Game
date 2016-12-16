#pragma strict

var target:GameObject;
var targetLocated:boolean;


function Start () {

}

function FixedUpdate () {
	if(targetOnScreen(target.transform.position)){
		transform.position.x=target.transform.position.x;
		transform.position.y=target.transform.position.y+1;
		transform.eulerAngles.z=-90;
	} else {
		transform.position.x=Camera.main.transform.position.x;
		transform.position.y=Camera.main.transform.position.y;
		transform.eulerAngles.z=Mathf.Atan2(target.transform.position.y-transform.position.y,target.transform.position.x-transform.position.x)/Mathf.PI*180;
		transform.position+=transform.right*5;
	}


}

function targetOnScreen(t:Vector2){
	var cameraPosition:Vector2 = Camera.main.transform.position;
	if(t.x > cameraPosition.x + 9.6 || t.x < cameraPosition.x - 9.6 || t.y > cameraPosition.y + 5.4 || t.y < cameraPosition.y - 5.4){
		targetLocated = false;
		return false;
	} else {
		targetLocated=true;
		return true;
	}
}