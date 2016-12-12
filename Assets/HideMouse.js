#pragma strict

function Start () {

}

function Update () {
	if(CursorIsWithinScreenBoundaries()){
		Cursor.visible=false;
	} else {
		Cursor.visible=true;
	}
}

function CursorIsWithinScreenBoundaries(){
	var location:Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	if(location.x<6.5 && location.x>-6.5 && location.y<4.2 && location.y>-2.6){
		return true;
	} else {
		return false;
	}
}