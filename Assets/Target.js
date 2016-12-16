#pragma strict

private var i:int;

function Start () {

}

function Update () {
	i++;
	transform.localScale.x = 0.5+(i%40)/80.0;
	transform.localScale.y = 0.5+(i%40)/80.0;
	GetComponent(SpriteRenderer).color.a=0.5-(i%40)/80.0;
}