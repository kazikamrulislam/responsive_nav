function navFunction(){
    let x = document.getElementById("topnav");
    if(x.className === "nav_top"){
        x.className += " responsive";
    }else{
        x.className = "nav_top";
    }
}