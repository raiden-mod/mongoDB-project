<?php
class Requirement
{

	private $db;
	public function __construct()
	{
		$this->db = new Database;
	}
	// this will count the charge point by country
	public function countChargePoint()
	{
		// specifythe parameters you  want to filter in the array
		return $this->db->aggregate([
			[
				'$group' => [
					'_id' => '$county',
					'count' => ['$sum' => 1],
					'county' => ['$push' => '$county']
				]
			]
		]);
	}
	// this will list the charge point in bradford town
	public function fetchChargePointDetailsBradford()
	{
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"town" =>	"Bradford",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [];
		return $this->db->find($parameters, $projection);
	}
	public function countryByChargePointDetailsOFS()
	{
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"chargeDeviceStatus" =>	"Out of service",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [];
		return $this->db->find($parameters, $projection);
	}
// this will fetch data  based on location type "on-Street"
	public function fetchChargePointDetailsLocationType(){
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"locationType" =>	"On-street",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [];
		return $this->db->find($parameters, $projection);
	}
	// this will fetch data based on county and limit the output by 30
	public function fetchChargePointDetailsLimitWeskYork(){
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"county" =>	"West Yorkshire",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [
			'limit' => 30
		];
		return $this->db->find($parameters, $projection);
	}
	// this  will fetch data based on town names which are "manchester", "leeds", "glasgow" and charge device are in service 
	
	public function fetchChargePointDetailsInListTowns(){
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"county" =>	[
				'$in' => [
					'Manchester',
					'Leeds',
					'Glasgow'
				]
			],
			"chargeDeviceStatus" =>	"In service",
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [];
		return $this->db->find($parameters, $projection);
	}
	public function fetchChargePointDetailsBtwTwoLat(){
		// specifythe parameters you  want to filter in the array
		$parameters = [
			"latitude" =>	[
				'$gte' => '51.400000',
				'$lte' => '51.555555',
			]
		];
		// spacify the parameters or rows you ant to output in the array
		$projection = [
			'limit' => 5
		];
		return $this->db->find($parameters, $projection);
	}
}
