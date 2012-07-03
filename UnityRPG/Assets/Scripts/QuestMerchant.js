#pragma strict

static var QuestAvailable = false; //used to tell if the button is ready to be on the screen
static var QuestStarted = false;   //used to tell if the player clicked the button to accept the quest

function Start () {

}

function Update () {
	
}

function OnCollisionEnter(collision : Collision){
	if(collision.gameObject.tag == "Player")
	{
		Debug.Log("hit");
		QuestAvailable = true;
	}
}

function OnGUI(){
	if(QuestAvailable == true){
		if(GUI.Button(new Rect(10, 10, 150, 100), "Quest Available"))
		{
			print("Quest Accepted");
			QuestStarted = true;
		}
	}
}

function OnCollisionExit(collision : Collision){
	if(collision.gameObject.tag == "Player")
	{
		Debug.Log("Exited");
		QuestAvailable = false;
	}
}
//Function for the portal.  To test if there is a quest available.
function isQuestAvailable(){
	return QuestStarted;
}