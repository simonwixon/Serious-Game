#pragma strict

function Start () {

}

function Update () {
	transform.position=Camera.main.ScreenToWorldPoint(Input.mousePosition);
	transform.position.z=-0.1;
}