<?php
class Database
{
	private $dbHost = DB_HOST;

	private $dbHandler;
	public function __construct()
	{
		$options = ["typeMap" => ['root' => 'array', 'document' => 'array']];
		try {
			// database connection
			$this->dbHandler = new MongoDB\Client($this->dbHost, [], $options);
		} catch (\Throwable $e) {
			$e->getMessage();
		}
	}
	/* create a new method that allows us to create quaries to find all data with parameters
	spacified */
	public function find($parameters, $projection)
	{
		// database name 
		$dbName =  $this->dbHandler->mongo_assignment;
		// database collection
		$dbCollection = $dbName->assignment_collection;
		// return the collection data
		return $dbCollection->find($parameters, $projection);
	}
	/* create a new method that allows us to create quaries to find one data with parameters
	spacified */
	public function findOne($parameters, $projection)
	{
		// database name 
		$dbName =  $this->dbHandler->mongo_assignment;
		// database collection
		$dbCollection = $dbName->assignment_collection;
		// return the collection data
		return $dbCollection->findOne($parameters, $projection);
	}
	// this will  count  and aggregate data from the mongoDb database 

	public function aggregate($parameters)
	{
		// database name 
		$dbName =  $this->dbHandler->mongo_assignment;
		// database collection
		$dbCollection = $dbName->assignment_collection;
		// return the collection data
		return $dbCollection->aggregate($parameters);
	}
}
