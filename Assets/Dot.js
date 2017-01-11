#pragma strict

var dragging:boolean;
private var startpos:Vector3;
var course:Course;

function Start () {
	startpos = transform.position;
}

function Update () {

	if(course.step==7){
		var mousepos:Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		if(dragging){
			transform.position+=(mousepos-transform.position)/2;
			transform.position.z=startpos.z;
			if(Vector2.Distance(transform.localPosition, Vector2(0.026, 2.8))<0.25){
				course.step++;
			}
		} else {
			transform.position=startpos;

			if(Vector2.Distance(transform.position, mousepos)<0.25){
				dragging=true;
			}


		}
	}
}