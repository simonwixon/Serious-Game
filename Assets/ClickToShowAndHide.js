#pragma strict

var objectToShow:GameObject;
var objectToHide:GameObject;

function Start () {

}

function OnMouseDown () {
	objectToShow.SetActive(true);
	objectToHide.SetActive(false);
}