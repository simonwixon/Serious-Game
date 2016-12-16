#pragma strict

private var i:float;
var alert:GameObject;

function Start () {

}

function LateUpdate () {
	if(Globals.trainingComplete[0] && !Globals.emergencyComplete[0]){
		i+=1.4;
		if(i%100>50){
			GetComponent(SpriteRenderer).color.a=0.99;
			transform.eulerAngles.z=5*Mathf.Sin(i);
			alert.SetActive(true);
		} else {
			if(GetComponent(SpriteRenderer).color.a==0.99){
				GetComponent(SpriteRenderer).color.a=0;
			}
			alert.SetActive(false);
			transform.eulerAngles.z=0;
		}
	}
}