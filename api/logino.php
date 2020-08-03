<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods:POST, PUT, GET,  DELETE");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Allow:POST,GET");
  $link = mysqli_connect("shareddb-u.hosting.stackcp.net", "secret-diary-3133337529", "48a0gc2zih", "secret-diary-3133337529");
        
        if (mysqli_connect_error()) {
            
            die ("Database Connection Error");
            
        }
        
    

    if (array_key_exists("logout", $_GET)) {
        
        session_unset();
        
        
    }
$error = "";

$post=file_get_contents("php://input");
$postdata=json_decode($post,true);
$email = $postdata["email"];
$password= $postdata["password"];

if(isset($postdata) && !empty($postdata)){
        
        if ($email=="") {
            
            $error = "An email address is required.";
            
        } else if ($password=="") {
            
            $error = "A password is required";
            
        } else if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
  
            $error = "Please enter a valid email address.";
            
}
        
        if ($error != "") {
            
            echo $error;
            exit();
            
        }



if($error == ""){
        

        $query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $email)."' LIMIT 1";
            
            $result = mysqli_query($link, $query);
            
            $row = mysqli_fetch_assoc($result);
                
                if ($row['password'] == $password) {
                    
                    
                    $_SESSION['id'] = $row['id'];
                    echo  $_SESSION['id'];
                    
                } else {
                    
                    $error = "Could not find that username/password combination. Please try again.";
                    
                }

            
        }
        
         if ($error != "") {
        echo $error; 
        
        }}
        ?>