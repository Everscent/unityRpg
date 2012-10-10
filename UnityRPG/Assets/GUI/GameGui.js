#pragma strict

var Fireball1 : Texture2D;

function Start () {

}

function OnGui(){
	GUI.Label(Rect(10,40, Fireball1.width, Fireball1.height), Fireball1);
}

function Update () {

}