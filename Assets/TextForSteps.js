#pragma strict

var course:Course;
@Multiline
var text:String[];

function Start () {

}

function Update () {
	if(course.step<text.Length){
		GetComponent(DynamicText).SetText(text[course.step]);
	}
}