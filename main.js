let links=document.querySelectorAll(".nav-link");
for(let i=0;i<links.length;i++){
    links[i].addEventListener("click", function(e){
        if(!links[i].classList.contains("activ")){
            links[i].classList.add("activ");
            for(let j=0;j<links.length;j++){
                if(j!=i){
                    links[j].classList.remove("activ");
                }
            }
        }
    });
}
