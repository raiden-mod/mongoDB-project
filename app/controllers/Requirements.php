<?php
class Requirements extends Controller
{
	private $pointModel;
	public function __construct()
	{
		$this->pointModel = $this->model('Requirement');
	}
	public function index()
	{
		$this->view('requirements/index');
	}
	public function countChargePoint()
	{
		// this will get all database data 
		$countCountryByChargePoint = $this->pointModel->countChargePoint();
		// save  the data in an array
		$data = [
			"chargePoint" => $countCountryByChargePoint
		];
		// this will pass the view and load all database data 
		$this->view('requirements/countChargePoint', $data);
	}
	// this will get the details of charge points in bradford town
	public function chargePointDetailsBradford()
	{
		// this will get all database data 
		$countryByChargePointDetails = $this->pointModel->fetchChargePointDetailsBradford();
		// save  the data in an array
		$data = [
			"chargePointDetails" => $countryByChargePointDetails
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsBradford', $data);
	}
	// this will get the details of charge points which are out of service
	public function chargePointDetailsOutOfServ()
	{
		// this will get all database data 
		$countryByChargePointDetailsOFS = $this->pointModel->countryByChargePointDetailsOFS();
		// save  the data in an array
		$data = [
			"chargePointDetailsOutOfService" => $countryByChargePointDetailsOFS
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsOutOfServ', $data);
	}
	
	// this will get the details of charge points which are with location type "On Street"
	public function chargePointDetailsLocationType()
	{
		// this will get all database data 
		$chargePointDetailsLocationType = $this->pointModel->fetchChargePointDetailsLocationType();
		// save  the data in an array
		$data = [
			"chargePointDetailsLocationType" => $chargePointDetailsLocationType
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsLocationType', $data);
	}

	// this will get the details of charge points which are with location type "On Street"
	public function chargePointDetailsLimitWeskYork()
	{
		// this will get all database data 
		$chargePointDetailsLimitWeskYork = $this->pointModel->fetchChargePointDetailsLimitWeskYork();
		// save  the data in an array
		$data = [
			"chargePointDetailsLimitWeskYork" => $chargePointDetailsLimitWeskYork
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsLimitWeskYork', $data);
	}
	// this  will fetch data based on town names which are "manchester", "leeds", "glasgow" and charge device are in service 
	public function chargePointDetailsInListTowns(){
		// this will get all database data 
		$chargePointDetailsInListTowns = $this->pointModel->fetchChargePointDetailsInListTowns();
		// save  the data in an array
		$data = [
			"chargePointDetailsInListTowns" => $chargePointDetailsInListTowns
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsInListTowns', $data);
	}	
	// this will fetch the charge point details between two latitude 51.4000000, 51.5555555
	public function chargePointDetailsBtwTwoLat(){
		// this will get all database data 
		$chargePointDetailsBtwTwoLat = $this->pointModel->fetchChargePointDetailsBtwTwoLat();
		// save  the data in an array
		$data = [
			"chargePointDetailsBtwTwoLat" => $chargePointDetailsBtwTwoLat
		];
		// this will pass the view and load all database data 
		$this->view('requirements/chargePointDetailsBtwTwoLat', $data);
	}
}
