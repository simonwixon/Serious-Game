#pragma strict

var step:int;
var scissors:DragWindow;
var course:Course;

function Start () {

}

function OnMouseEnter () {
	if(scissors.dragging && step==course.step){
		course.step++;
	}
}