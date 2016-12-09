#pragma strict

var delay:int;
var fadeSpeed:float;
private var i:int;
private var sr:SpriteRenderer;

function Start () {
	sr = GetComponent(SpriteRenderer);
}

function Update () {
	i++;
	if(i > delay){
		if(sr.color.a>0){
			sr.color.a-=fadeSpeed;
		} else {
			Destroy(gameObject);
		}
	}
}