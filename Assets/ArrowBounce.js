#pragma strict

var arrow:Arrow;
var delay:int;
private var i:float;
private var j:int;

function Start () {

}

function Update () {
	if(arrow.targetLocated){
		j--;
		if(j<=0){
			i+=0.15;
			transform.localPosition.x=Mathf.Sin(i)/2;
		}
	} else {
		j=delay;
		i=0;
		transform.localPosition.x-=transform.localPosition.x/4;
	}
}