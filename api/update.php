<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods:POST, PUT, GET,  DELETE");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Allow:POST,GET");



   $link = mysqli_connect("shareddb-u.hosting.stackcp.net", "secret-diary-3133337529", "48a0gc2zih", "secret-diary-3133337529");
        
        if (mysqli_connect_error()) {
            
            die ("Database Connection Error");
            
        }



        $post=file_get_contents("php://input");
        $postdata=json_decode($post,true);
        $content = trim( $postdata["content"]);
        $id=trim($postdata["id"]);
        $route=trim($postdata["route"]);
        $f="diary";
        $dbname= $f. $route;
        
if(isset($postdata) && !empty($postdata))
{
        
        if(isset($_GET) && $_GET["doit"]="hii" ){
// $query="UPDATE users ($dbname) VALUE ('". mysqli_real_escape_string($link , $content)."') WHERE id= '". mysqli_real_escape_string($link, $id)."' ";
$query = "UPDATE `users` SET $dbname = '".mysqli_real_escape_string($link,$content)."' WHERE id = ".mysqli_real_escape_string($link, $id)." LIMIT 1";
        mysqli_query($link,$query);
        }

        if(isset($_GET) && $_GET["doit"]="hi" ){


        $query = "SELECT $dbname FROM `users` WHERE id = ".mysqli_real_escape_string($link, $id)." LIMIT 1";
        $row = mysqli_fetch_array(mysqli_query($link, $query));
         $thecontent = $row[`$dbname`];
echo $id;

}
}
?>