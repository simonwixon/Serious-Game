#pragma strict

var description:GameObject;
private var instructions:GameObject;

function Start () {
	GetComponent(SpriteRenderer).color.a=0;
	description.SetActive(false);
	instructions=GameObject.Find("Instructions");
}

function Update () {

}

function OnMouseOver(){
	GetComponent(SpriteRenderer).color.a=1;
	description.SetActive(true);
	instructions.SetActive(false);
}

function OnMouseExit(){
	GetComponent(SpriteRenderer).color.a=0;
	description.SetActive(false);
	instructions.SetActive(true);
}