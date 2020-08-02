
<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods:POST, PUT, GET,  DELETE");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Allow:POST,GET");



   $link = mysqli_connect("shareddb-u.hosting.stackcp.net", "secret-diary-3133337529", "48a0gc2zih", "secret-diary-3133337529");
        
        if (mysqli_connect_error()) {
            
            die ("Database Connection Error");
            
        }

   

 $error = "";
$post=file_get_contents("php://input");
$postdata=json_decode($post,true);
$email = $postdata["email"];
$password= $postdata["password"];

if(isset($postdata) && !empty($postdata))
{
        
        if ($email=="") {
            
            $error = "An email address is required.";
            
        } else if ($password=="") {
            
            $error = "A password is required";
        }
         else if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $alternative = 1;
            
            
}
        if($alternative!=1){
            $error = "please enter a valid email adress.";
        }
        if ($error != "") {
            
            echo  $error;
            
            exit();
            
        }
        
        
        if ($error=="") {
            
            $query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $email)."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0){ 
                $error = "That email address is already taken.";
            }
            
            else {
                
                $query = "INSERT INTO users (`email`, `password`) VALUES ('". mysqli_real_escape_string($link, $email)."', '". mysqli_real_escape_string($link, $password)."')";
                
                if (mysqli_query($link, $query)) {
                    
                 
                    $_SESSION['id'] = mysqli_insert_id($link);
                    
                    
                    
                echo  $_SESSION['id'];
                    
                    
                    
                } else {
                    
                    $error = "Couldn't create user - please try again later";
                    
                }
                
            }}
            
if ($error!=""){
    
  echo  $error;
}}




?>




