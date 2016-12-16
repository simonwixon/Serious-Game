#pragma strict

var left:float;
var right:float;
var top:float;
var bottom:float;

function Start () {

}

function LateUpdate () {
	if(transform.position.x<left){
		transform.position.x=left;
	}
	if(transform.position.x>right){
		transform.position.x=right;
	}
	if(transform.position.y<bottom){
		transform.position.y=bottom;
	}
	if(transform.position.y>top){
		transform.position.y=top;
	}
}