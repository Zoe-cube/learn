
function biao(){
    let day2 = new Date();
//  day2.setTime(day2.getTime());
 let s2 = day2.getFullYear()+"/" + (day2.getMonth()+1) + "/" + day2.getDate(); 
 let x2 = document.getElementById('time');
x2.innerHTML = s2;
let d = new Date();
	let x = document.getElementById("time2");
	x.innerHTML=d.toLocaleTimeString();
}
setInterval(biao,1000)
let kaishi=document.getElementById("kaishi");
let jieshi=document.getElementById('jieshu');
kaishi.addEventListener("click",guiling);
jieshu.addEventListener('click',jicishu);
let h=0,m=0,s=0,t,ot;
let clock =document.getElementById('clock');
function count(){
    
    s=s+1;
    if(s>60)
    {
        m=m+1;
        s=0;
        if(m>60)
        {
            h=h+1;
            m=0
        }
    }

        clock.innerHTML=h+"H"+m+'M'+s+'S'
}

function guiling()
{
    if( t==null)
    {
        t = setInterval(count,1000);
        
    }
    else{
        clearInterval(t);
        h=0;m=0;s=0;
        clock.innerHTML=h+"H"+m+'M'+s+'S'
        t = setInterval(count,1000);
      
    }
    
}
//  let ul=document.getElementById('jici'),shanchu,i;
// function jicishu(){
//     clearInterval(t);
//     ot=day2.getFullYear()+"/" + (day2.getMonth()+1) + "/" + day2.getDate()+d.toLocaleTimeString();
//     h=0,m=0,s=0;
//     clock.innerHTML=h+"H"+m+'M'+s+'S';
//     let li=document.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML=ot+'-'+t;
//     i=i+1;
//     li.setAttribute("id",'li'+i);
//     shanchu=document.createElement('shanchu');
//     li.appendChild(shanshu);
//     shanchu.innerHTML="删除";
//     shanchu.addEventListener("click",remove);
//     let delete = document.getElementById("li"+i);
//     function dele(){ul.removeChild(delete);}

// } 