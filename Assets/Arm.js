#pragma strict

var dragging:boolean;
var extra:int;
var course:Course;

function Start () {

}

function Update () {
	if(!Input.GetMouseButton(0)){
		dragging = false;
	}

	if(dragging && course.step==6){
		var mousePos:Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var targetRotation = Mathf.Atan2(mousePos.y-transform.position.y, mousePos.x-transform.position.x)/Mathf.PI*180 + extra;
		
		transform.eulerAngles.z+=(targetRotation-transform.eulerAngles.z)/4;
		if(transform.eulerAngles.z>190){
			transform.eulerAngles.z=190;
			targetRotation=190;
			GetComponent(SpriteRenderer).color = Color32(255, 163, 163, 255);
		} else {
			GetComponent(SpriteRenderer).color = Color.white;
		}

		if(transform.eulerAngles.z<136){
			print(transform.eulerAngles.z);
			transform.eulerAngles.z=136;
			targetRotation=136;
			course.step=7;
		}
	}
}

function OnMouseDown(){
	dragging = true;
}