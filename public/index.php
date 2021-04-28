<?php 
//http://localhost/...

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "controllers/front/API.controllers.php";
$apiController = new APIController();

try{
  if(empty($_GET['page'])){
      throw new Exception("La page n'existe pas");
  } else {
      $url = explode("/",filter_var($_GET['page'],FILTER_SANITIZE_URL));
      if(empty($url[0]) || empty($url[1])) throw new Exception ("La page n'existe pas");
      switch($url[0]){
        case "front" : 
          switch($url[1]){
            case "users": $apiController -> getUsers();
            break;
            case "user": 
              if(empty($url[2])) throw new Exception ("L'id utilisateurs est manquant");  
              $apiController -> getUser($url[2]);    
            break;
            default : throw new Exception ("La page n'existe pas");
          }
        break;
        case "back" : echo "page back end demandée";
        break;
        default : throw new Exception ("La page n'existe pas");
      }
  }
} catch (Exception $e) {
  $msg = $e->getMessage();
  echo $msg;
}

