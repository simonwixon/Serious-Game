#pragma strict

private var dragging:boolean;
private var offset:Vector3;

function Start () {

}

function Update () {
	if(dragging){
		if(!Input.GetMouseButton(0)){
			dragging=false;
		}
		if(CursorIsWithinScreenBoundaries()){
			transform.position = offset + Camera.main.ScreenToWorldPoint(Input.mousePosition);
		}
	}
}

function OnMouseDown(){
	dragging=true;
	offset=transform.position-Camera.main.ScreenToWorldPoint(Input.mousePosition);
}

function CursorIsWithinScreenBoundaries(){
	var location:Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	if(location.x<6.5 && location.x>-6.5 && location.y<4.2 && location.y>-2.6){
		return true;
	} else {
		return false;
	}
}