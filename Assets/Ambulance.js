#pragma strict

private var rb:Rigidbody2D;
var speed:float = 0.1;
var maxspeed:float=1;

function Start () {
	rb = GetComponent(Rigidbody2D);
}

function FixedUpdate () {

	

	if(Input.GetKey(KeyCode.UpArrow)){
		rb.AddForce(transform.up*speed);
		rb.drag=5;
	} else {
		rb.drag=15;
	}
	if(Input.GetKey(KeyCode.DownArrow)){
		rb.AddForce(-transform.up*speed*2);
	}


	var curspeed:Vector2 = Vector2(rb.velocity.x, rb.velocity.y);
 
         if (curspeed.magnitude > maxspeed) {
             curspeed = curspeed.normalized;
             curspeed *= maxspeed;
             rb.velocity=curspeed;
         }

         var forward:int = Input.GetKey(KeyCode.UpArrow)?1:-1;

         if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Rotate(Vector3.forward * curspeed.magnitude*forward);
	}
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Rotate(-Vector3.forward * curspeed.magnitude*forward);
	}

}