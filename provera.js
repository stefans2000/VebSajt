function provera(){
    var ime = document.MojaForma.user.value;
    var pass = document.MojaForma.pass.value;
    var potvrda = document.MojaForma.potvrda.value;
    var email = document.MojaForma.email.value;
    var greskaime = document.getElementById("gime");
    var greskapass = document.getElementById("gpass");
    var greskapotvrda = document.getElementById("gpotvrda");
    var greskaemail = document.getElementById("gemail");
   
   

    save("Ime",ime,localStorage);
    save("Ime",ime,sessionStorage);
    save("Sifra",pass,localStorage);
    save("Sifra",pass,sessionStorage)
    save("Email",email,localStorage);
    save("Email",email,sessionStorage);


    if(ime==="" || ime===null)
    {
        alert("Niste uneli korisnicko ime");
        greskaime.innerHTML = "Greška!";
        return false;
    }
  
    
    else if(pass==="" || pass===null)
    {
        
        alert("Niste uneli lozinku");
        greskaime.innerHTML = ""
        greskapass.innerHTML = "Greška!";
        return false;
    }
  
    else if(potvrda==="" || potvrda===null)
    {
        alert("Niste ponovo uneli lozinku"); 
        greskapass.innerHTML = "";
        greskapotvrda.innerHTML = "Greška!";
        return false;
    }
    
    else if(potvrda!==pass)
    {
        alert("Lozinke se ne podudaraju");
        greskapotvrda.innerHTML = "Greška!";
        return false;
    }
  
    else if(email==="" || email===NULL)
    {
        alert("Niste uneli e-mail");
        greskapotvrda.innerHTML = "";
        greskaemail.innerHTML = "Greška!";
        return false;
    }
    else
    {
        alert("Uspesno poslali formu");
        return true;
    }
    
  }
  var dat=new Date()
  var vreme = dat.getDate() +"."+(dat.getMonth()+1)+"."+dat.getFullYear()+" "+dat.getHours()+":"+dat.getMinutes();

  function save(key, value, storage){
    storage.setItem(key, value);
  }
  var keys = [];
  var values = [];
  function readStorage(storage, keys, values, idEl){
    keys.length = 0;
    values.length = 0;
    let i=0;
    while(storage.key(i)){
        let k = storage.key(i);
        let v = storage.getItem(k);
        keys.push(k);
        values.push(v);
        i++;
    }
    var rez=""+vreme;
    for(i=0;i<keys.length;i++){
        rez+=" " + keys[i] + ": " + values[i];
    }
    document.getElementById(idEl).innerHTML=rez;
  }