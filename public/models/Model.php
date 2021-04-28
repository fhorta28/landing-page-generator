<?php

abstract class Model {
    private static $pdo;
// Connexion à la BDD
    private static function setBdd(){
        self::$pdo = new PDO('mysql:host=localhost;dbname=landing-page-generator','root','',array(PDO::ATTR_ERRMODE=> PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND =>'set NAMES utf8'));
    }
// Vérification si pdo existe 
  protected function getBdd(){
    if(self::$pdo === null){
      self::setBdd();
    }
    return self::$pdo;
  }
// conversion des données en format json & accès de l'app externe à l'api
  public static function sendJSON($info){
      header("Access-control-Allow-Origin: *"); // remplacer l'étoile par l'adresse du site par la suite
      header("Content-Type: application/json");
      echo json_encode($info);
  }
}