function calc()
{
    let number1=document.getElementsByClassName("bd")[0].value;
    let number2=document.getElementsByClassName("bd")[1];
    let textar=document.getElementsByClassName("textarea")[0];
    
    if(!(errortest(number1)))
    {
    number2.value=` error`;
    textar.innerHTML=`&#x26A0 error please enter a binary number (ex : 101)`;

    }
    else{

    let temp=number1;
    let i=0,sum=0;
    let rem=null;
    let str="";
    while(number1>=1)
    {
        rem=Math.round(number1 % 10);
        str+=`(${rem}&times${2})<sup>${i}</sup> +   `;
        sum=rem*2**i+sum;
        i++;
        number1/=10;
    }
    str=str.substring(0,str.length-4);
    sum=Math.round(sum);
    number2.value=sum;
    
    textar.innerHTML=`(${temp}) <sub>2</sub>  =  ${str}`;
  
}
}

// error testinf function----------------
function errortest(num)
{
    
    str=""+num;
    let ar=str.split("");
    for(let number of ar)
    {
        if((number==1)|| (number==0))
        {
            return true
        }

    }
    return false;

}