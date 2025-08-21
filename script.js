const charRange={
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*_+?"
}
const output=document.querySelector("#output");
const length=document.querySelector("#length");
const checkbox=document.querySelectorAll('input[type="checkbox"]');
const generatebuton=document.querySelector("#generate")
const copybutton=document.querySelector("#copy");

copybutton.addEventListener('click',copypassword);

document.addEventListener("DOMContentLoaded",generate);

generatebuton.addEventListener('click',generate);

length.addEventListener("change",generate)
checkbox.forEach(function(e){
   e.addEventListener("change",generate);
})

function generate(){
    const len=parseInt(length.value);
    if(len<parseInt(length.min) || len>parseInt(length.max))
    {
        console.log=(234);
        output.textContent="Invalid Input";
        return;
    }

    const checkedOptions=[...checkbox].filter(function(e){
       return e.checked;
    })
    
    
    checkedOptions.map(function(e){
        e.disabled=1===checkedOptions.length;
    })

    output.textContent=createpassword(len,checkedOptions);
}

function createpassword(len,checkedoptions)
{
   let charlist = "";
   console.log(checkedoptions);
   checkedoptions.forEach(function(e){
      console.log(e.id);
      charlist+=charRange[e.id];
      console.log(charlist)
   })

   let password="";
   for(let i=0;i<len;i++)
   {
      password +=charlist[Math.floor(Math.random()* charlist.length)];   
   }
   return password;
}

 function copypassword(){
    const password=output.textContent;

    if(!password || password=="Invalid Input") return;

    navigator.clipboard.writeText(password).then(()=>{
        alert('password copied sucessfully');
    })
 }