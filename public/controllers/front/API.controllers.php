<?php 
require_once "models/front/API.manager.php";
require_once "models/Model.php";

class APIController {

  private $apiManager;

  public function __construct(){
    $this->apiManager = new APIManager();
  }

  public function getUsers(){
    $datasUsers = $this->apiManager-> getDataUsers();
    // echo "<pre>";
    // print_r($users);
    // echo "</pre>";
    Model::sendJson($this->formatUsersData($datasUsers));
  }
  private function formatUsersData($datasUsers){
    $tab = [];
    foreach($datasUsers as $dataUsers){
      $tab[$dataUsers['id_user']] = [
        "id" => $dataUsers['id_user'],
        "first_name" => $dataUsers['first_name'],
        "last_name" => $dataUsers['last_name'],
        "email" => $dataUsers['email']
      ];
    }
    // echo "<pre>";
    // print_r($tab) ;
    // echo "</pre>";
    return $tab;
  }
  public function getUser($idUser){
    $datasUser = $this->apiManager->getDataUser($idUser);
    // echo "<pre>";
    // print_r($user);
    // echo "</pre>";
    Model::sendJson($this->formatDataUser($datasUser));
  }

  private function formatDataUser($datasUser){
    $tab = [];
 
    foreach($datasUser as $dataUser){
      if(!array_key_exists($dataUser['id_theme'],$tab) ){
         $tab[$dataUser['theme_id']] = [
           "id" => $dataUser['id_theme'],
           "name" => $dataUser['name_theme'],
           "date" => $dataUser['date_at_created'],
           "nav" => [
             "logo" => $dataUser['logo'],
             "slogan" => $dataUser['slogan']
           ],
           "banner" => [
             "title" => $dataUser['title_banner'],
             "subTitle" => $dataUser['subtitle_banner'], 
             "image" => $dataUser['image_banner'] 
           ],
           "section_services" => [
             "title" => $dataUser['title_section_services'],
           ],
           "section_references" => [
             "title" => $dataUser['title_section_references']  
           ],
           "section_testimonials" => [
             "title" => $dataUser['title_section_testimonials'],
             
           ],
           "footer" => [
             "title" => $dataUser['title_footer'],
             "link_one" => $dataUser['link_one'],
             "link_two" => $dataUser['link_two'],
             "link_three" => $dataUser['link_three']
           ],
           "colors" => [
               "primary_bg" => $dataUser['primary_bg'],
               "primary_text" => $dataUser['primary_txt'],
               "primary_bg_btn" => $dataUser['primary_bg_btn'],
               "secondary_bg" => $dataUser['secondary_bg'],
               "secondary_subtitle" => $dataUser['secondary_txt_subtitle'],
               "secondary_txt_btn" => $dataUser['secondary_txt_btn'],
               "icon" => $dataUser['icon_color'],
               "link" => $dataUser['link_color']    
             ],
         ];
      }   
      
      $tab[$dataUser['theme_id']]['section_references']['reference_logo'][$dataUser['id_logo_references']] = [ 
        "name" => $dataUser['name_logo'],
        "logo_url" => $dataUser['logo_url'],  
      ];
      $tab[$dataUser['theme_id']]['section_services']['service'][$dataUser['id_service']] = [ 
        "id_services" => $dataUser['id_service'],
        "title" => $dataUser['title_service'],
        "paragraph" => $dataUser['paragraph'],
        "image" => $dataUser['image']
      ];
      $tab[$dataUser['theme_id']]['section_testimonials']['slide'][$dataUser['id_testimo_slide']] = [ 
        "id" => $dataUser['id_testimo_slide'],
        "name" => $dataUser['image_slide'],
        "logo" => $dataUser['logo_slide'],
        "description" => $dataUser['description'],
        "author_name" => $dataUser['author'],
        "author_post" => $dataUser['author_post']
      ];
      $tab[$dataUser['theme_id']]['fonts']['fonts_title'][$dataUser['id_fonts_title']] = [ 
        "id" => $dataUser['id_fonts_title'],
        "name" => $dataUser['name_fonts_title'],
      ];     
      $tab[$dataUser['theme_id']]['fonts']['fonts_txt'][$dataUser['id_fonts_txt']] = [ 
        "id" => $dataUser['id_fonts_txt'],
        "name" => $dataUser['name_fonts_txt'],
      ];
 
    }
    // echo "<pre>";
    // print_r($tab) ;
    // echo "</pre>";
    return $tab;
  } 
      
}