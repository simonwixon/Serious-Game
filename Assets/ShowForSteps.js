#pragma strict

var steps:int[];
var course:Course;

function Start () {

}

function Update () {
	if(CheckSteps()){
		GetComponent(SpriteRenderer).enabled=true;
	} else {
		GetComponent(SpriteRenderer).enabled=false;
	}
}

function CheckSteps(){
	for (var step in steps){
		if(step==course.step){
			return true;
		}
	}
	return false;
}