#pragma strict

private var i:int;
var ambulance:Transform;

function Start () {

}

function Update () {
	i++;
	transform.localScale.x = 0.5+(i%40)/80.0;
	transform.localScale.y = 0.5+(i%40)/80.0;
	GetComponent(SpriteRenderer).color.a=0.5-(i%40)/80.0;
	if(Vector2.Distance(ambulance.position,transform.position)<0.5){
		Application.LoadLevel("Emergency");
	}

}