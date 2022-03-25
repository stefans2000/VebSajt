var prelazi=document.querySelector('.slajder-clan').children;
var sledeciPrelaz=document.querySelector(".desno");
var prosliPrelaz=document.querySelector(".levo");
var ukupnoPrelaza=prelazi.length;
var index=0;

sledeciPrelaz.onclick=function ()
{
    next("sledeci");
}
prosliPrelaz.onclick=function ()
{
    next("prosli");
}
function next(direction)
{
    if(direction=="sledeci"){
        index++;
        if(index==ukupnoPrelaza){
            index=0;
        }
    }
    else{
        if(index==0)
        {
            index=ukupnoPrelaza-1;
        }
        else{
            index--;
        }
    }
    for(i=0;i<prelazi.length;i++)
    {
        prelazi[i].classList.remove("aktivan");
    }
    prelazi[index].classList.add("aktivan");
}