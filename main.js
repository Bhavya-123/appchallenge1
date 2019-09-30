function max()
{
    const one = parseInt(document.querySelector('#num1').value);
    const two = parseInt(document.querySelector('#num2').value);
    
    const ans=Math.max(one,two);
    document.getElementById("result").innerHTML= "The maximum number between the numbers is "+ans;
}


document.getElementById("maxButton").addEventListener('click',max)