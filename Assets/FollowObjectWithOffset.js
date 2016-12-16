#pragma strict

var object:Transform;
var offset:Vector2;
var matchRotation:boolean;

function Start () {

}

function Update () {
	transform.position=object.position+offset;
	if(matchRotation){
		transform.eulerAngles=object.eulerAngles;
	}
}