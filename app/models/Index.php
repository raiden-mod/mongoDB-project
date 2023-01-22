<?php
class Index
{

	private $db;
	public function __construct()
	{
		$this->db = new Database;
	}
	// this will get all database data 
	public function getAllDatabaseData()
	{
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"town" =>	"Preston",
			"postcode" => "PR5 6AW",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [];
		return $this->db->find($parameters, $projection);
	}
}
