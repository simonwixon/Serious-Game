#pragma strict

function Start () {

}

function Update () {
	var time = System.DateTime.Now;
	GetComponent(DynamicText).SetText(time.Hour+":"+time.Minute);
}