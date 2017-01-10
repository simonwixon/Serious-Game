#pragma strict

var pressure:float=0;
var timer:int=0;
var course:Course;
var step:int=5;

function Start () {

}

function Update () {
	if(pressure>0){
		pressure-=0.005;
	}
	if(Input.GetMouseButtonDown(0) && course.step==step){
		pressure += 0.12;
	}

	if(pressure>1){
		pressure=1;
	}
	if(pressure > 0.736 && pressure < 0.929){
		timer++;
	} else {
	 	timer=0;
	}
	if(timer>100){
		course.step++;
		enabled=false;
	}
	transform.localScale.y=pressure*11.4;
}