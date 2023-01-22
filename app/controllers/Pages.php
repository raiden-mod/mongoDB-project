<?php
class Pages extends Controller
{
    private $homeModel;
    public function __construct()
    {
        $this->homeModel = $this->model('Index');
    }

    public function index()
    {
        // this will get all database data 
        $databaseData = $this->homeModel->getAllDatabaseData();
        $countCountryByChargePoint = $this->homeModel->countChargePoint();
        // save  the data in an array
        $data = [
            "loadData" => $databaseData,
            "chargePoint" => $countCountryByChargePoint
        ];
        // this willl pass the view and load all database data 
        $this->view('index', $data);
    }
    
    public function chargePoint()
    {
        // this will get all database data 
        $countCountryByChargePoint = $this->homeModel->countChargePoint();
        // save  the data in an array
        $data = [
            "chargePoint" => $countCountryByChargePoint
        ];
        // this willl pass the view and load all database data 
        $this->view('chargePoint', $data);
    }
}
