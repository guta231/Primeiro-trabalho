function ver(){
    
    if ( document.querySelector("#senha").getAttribute("type") === "password"){
        document.querySelector("#senha").setAttribute("type", "text");
    }else{
        document.querySelector("#senha").setAttribute("type", "password");
    }
        
}
