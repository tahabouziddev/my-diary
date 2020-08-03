<?php




$link = mysqli_connect("shareddb-u.hosting.stackcp.net", "secret-diary-3133337529", "48a0gc2zih", "secret-diary-3133337529");
        
if (mysqli_connect_error()) {
    
    die ("Database Connection Error");
    
}
$i=1;
$diarynumber=strval($i);
$diary= "diary"+ $diarynumber;
while($i<365){

    mysqli_query( $link,"ALTER TABLE users ADD $diary VARCHAR(50) NOT NULL");
$i=$i+1;

}







?>