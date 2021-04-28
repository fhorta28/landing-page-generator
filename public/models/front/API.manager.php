<?php
require_once "models/Model.php";

class APIManager extends Model {

  public function getDataUsers(){
    $req = "SELECT * FROM user";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $users = $stmt->fetchall(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $users;
  }

  public function getDataUser($idUser){
   
    $req = "SELECT * FROM  theme t
    INNER JOIN  nav n on n.theme_id = t.id_theme
    INNER JOIN  banner b on b.theme_id = t.id_theme
    INNER JOIN  footer foo on foo.theme_id = t.id_theme
    INNER JOIN logo_references lr on lr.theme_id = t.id_theme
    INNER JOIN   service sv on t.id_theme = sv.theme_id
    INNER JOIN  testimo_slide slide on slide.theme_id = t.id_theme
    INNER JOIN colors c on c.theme_id = t.id_theme
    INNER JOIN fonts_txt ft on ft.theme_id = t.id_theme
    INNER JOIN fonts_title ftl on ftl.theme_id = t.id_theme
    WHERE t.user_id = :idUser 
    ";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":idUser",$idUser,PDO::PARAM_INT);
    $stmt->execute();
    $user = $stmt->fetchall(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $user;

  }
 
}
