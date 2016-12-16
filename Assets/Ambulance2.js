#pragma strict

var speed:float = 0;
var acceleration:float = 0.5;
var turnFriction:float = 5;
var maxSpeed:float = 15;
private var rb:Rigidbody2D;

function Start () {
	rb = GetComponent(Rigidbody2D);
}

function Update () {
	if(Input.GetKey(KeyCode.UpArrow)){
		speed += acceleration;
	}
	if(Input.GetKey(KeyCode.DownArrow)){
		speed -= acceleration;
	}
	if(speed > 0){
		speed -= acceleration/2;
	}
	if(speed < 0){
		speed += acceleration/2;
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.eulerAngles.z += speed/turnFriction;
	}
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.eulerAngles.z -= speed/turnFriction;
	}
	if(speed > maxSpeed){
		speed = maxSpeed;
	}
	if(speed < -maxSpeed){
		speed = -maxSpeed;
	}
	rb.velocity.x = speed*Mathf.Cos((transform.eulerAngles.z)*Mathf.PI/180);
	rb.velocity.y = speed*Mathf.Sin((transform.eulerAngles.z)*Mathf.PI/180);
}


