

const chatLogo = document.getElementsByClassName("chat-logos")[0];
let  chatMain =document.getElementsByClassName("chat")
chatLogo.addEventListener("click", function() {
    let  myDiv = document.getElementById("myDiv")
    let myMesaj = document.getElementById("mesaj")
    myDiv.classList.toggle("d-none");
    myMesaj.classList.toggle("d-none");

  });

const sendMesaj = document.getElementById("send");
const text = document.querySelector("input");
const chatBody = document.getElementsByClassName("chat-body")[0]

 


sendMesaj.onclick = function () {
   const regex = /^[a-z]$/;
   if(regex.test(text.value[0])){
    const newDiv = document.createElement("div");
    newDiv.classList.add("d-flex","style")
    let oImg = document.createElement("img");
    oImg.setAttribute('src', 'img/user.png');
    oImg.setAttribute('alt', 'user');
    oImg.setAttribute('height', '75px');  
    oImg.setAttribute('width', '75px');
    oImg.setAttribute('margin-right', '20px');
    newDiv.appendChild(oImg)
    let newH1 = document.createElement("h1");
    newDiv.appendChild(newH1); 
    newH1.innerHTML = text.value;
    text.value = "";
    chatBody.appendChild(newDiv);
   }
  else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("d-flex","style")
    let newH1 = document.createElement("h1");
    newDiv.appendChild(newH1); 
    newH1.innerHTML = text.value;
    text.value = "";
    let oImg = document.createElement("img");
    oImg.setAttribute('src', 'img/admin.png');
    oImg.setAttribute('alt', 'admin');
    oImg.setAttribute('height', '75px');
    oImg.setAttribute('width', '75px');
    newDiv.appendChild(oImg)
    chatBody.appendChild(newDiv);     
   }


}

document.onkeydown = function(e){
      if( e.keyCode === 13){
        const regex = /^[a-z]$/;
        if(regex.test(text.value[0])){
         const newDiv = document.createElement("div");
         newDiv.classList.add("d-flex","style")
         let oImg = document.createElement("img");
         oImg.setAttribute('src', 'img/user.png');
         oImg.setAttribute('alt', 'user');
         oImg.setAttribute('height', '75px');  
         oImg.setAttribute('width', '75px');
         oImg.setAttribute('margin-right', '20px');
         newDiv.appendChild(oImg)
         let newH1 = document.createElement("h2");
         newDiv.appendChild(newH1); 
         newH1.innerHTML = text.value;
         text.value = "";
         chatBody.appendChild(newDiv);
        }
       else {
         const newDiv = document.createElement("div");
         newDiv.classList.add("d-flex","style")
         let newH1 = document.createElement("h1");
         newDiv.appendChild(newH1); 
         newH1.innerHTML = text.value;
         text.value = "";
         let oImg = document.createElement("img");
         oImg.setAttribute('src', 'img/admin.png');
         oImg.setAttribute('alt', 'admin');
         oImg.setAttribute('height', '75px');
         oImg.setAttribute('width', '75px');
         newDiv.appendChild(oImg)
         chatBody.appendChild(newDiv);     
        }
       }
  
  }