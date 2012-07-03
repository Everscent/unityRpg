#pragma strict


function Start () {
	//var test = GetComponent(QuestMerchant);
	//Debug.Log((test)?"Exists":"Does Not Exist");
	
	//Debug.Log(questMerchant?"Exists":"Does not exist");
		
}

function OnCollisionEnter(collision : Collision){
	if(collision.gameObject.tag == "Player")
	{
		Debug.Log("Entered the Portal");
		//print(questMerchant.isQuestAvailable());
		
	}
}

function Update () {
	//questMerchant = GetComponent(QuestMerchant);
}