#pragma strict

var object:Transform;
var rotation:boolean;
var smoothRotation:boolean;

function Start () {

}

function FixedUpdate () {
	transform.position.x+=(object.position.x-transform.position.x)/10;
	transform.position.y+=(object.position.y-transform.position.y)/10;

	if(rotation){
		transform.eulerAngles.z=object.eulerAngles.z;
	}
}