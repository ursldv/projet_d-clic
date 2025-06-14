function contact() {
    const nom=document.getElementById("nom");
    const prenom=document.getElementById("prenom");
    const sujet=document.getElementById("sujet");
    const description=document.getElementById("description");
    const envoyer=document.getElementById("Envoyer")
    const message=document.getElementById("message")
    if(nom.value=="" || prenom.value=="" || sujet.value=="" || description.value==""){
        if(nom.value==""){
            nom.style.border=`2px solid red` ;
        }
        if(prenom.value==""){
            prenom.style.border=`2px solid red` ;
        }
        if(sujet.value==""){
            sujet.style.border=`2px solid red` ;
        }
        if(description.value==""){
            description.style.border=`2px solid red` ;
        }
        envoyer.style.background=`red`
    }else{
        nom.style.border=`1px solid green` ;
        prenom.style.border=`1px solid green` ;
        sujet.style.border=`1px solid green` ;
        description.style.border=`1px solid green` ;
        envoyer.style.background=`green`;
        message.style.background=`rgb(191, 223, 241)`;
        message.style.padding=`15px`;
        let mesdebut=0;
        let mesfin=60;
        let mesint=setInterval(()=>{
            mesdebut++;
            message.innerText="Merci de nous avoir contacter";
            if(mesdebut==mesfin){
                clearInterval(mesint);
                message.innerText="";
                message.style.padding=`0px`;

            }
        },60)
    }
}