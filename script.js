const par = document.querySelector('#root');

par.addEventListener('click' , (event)=>{

    // console.log(event.target.tagName);     ///it print the element tagname which is triggering 

    if(event.target.tagName == "BUTTON"){
document.body.style.backgroundColor = event.target.id;
    }
},false);






