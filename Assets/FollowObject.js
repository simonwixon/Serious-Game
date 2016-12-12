#pragma strict

var target:Transform;

function Start () {

}

function FixedUpdate () {
	transform.position+=(target.position-transform.position)/8;
	transform.position.z=-10;
}