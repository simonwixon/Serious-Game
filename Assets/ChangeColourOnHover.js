#pragma strict

var defaultColour:Color;
var hoverColour:Color;
private var dt:DynamicText;

function Start () {
	dt = GetComponent(DynamicText);
	dt.color=defaultColour;
}

function OnMouseEnter () {
	dt.color=hoverColour;
}

function OnMouseExit () {
	dt.color=defaultColour;
}