#pragma strict

var animationCurve:AnimationCurve;
var targetPosition:Vector3;
var delay:int;
var frames:int;
private var i:int;
private var j:int;
private var startPosition:Vector3;

function Start () {
	startPosition=transform.position;
}

function Update () {
	i++;
	if(i>delay){
		j++;
		var k:float = animationCurve.Evaluate((j*1.0)/frames);
		transform.position = startPosition + Vector3(k*(targetPosition.x-startPosition.x), k*(targetPosition.y-startPosition.y), k*(targetPosition.z-startPosition.z));
		if(j>frames){
			SkipToEnd();
		}
	}
}

function SkipToEnd(){
	transform.position=targetPosition;
	enabled=false;
}