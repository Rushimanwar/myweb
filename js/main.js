// responsive nav barr


var nav = document.querySelector('header');
var bar =  document.querySelector('.bar');
bar.addEventListener('click',function(){
    nav.classList.toggle('show-menu');
});

// enquiry show and hide


function show_enquiry(){
    setTimeout(() => {
        let cross = document.getElementById("cross");
        let enquiry = document.getElementById("enquiry");
        
        enquiry.classList.remove("show_enquiry");
        cross.onclick = () =>{
            enquiry.classList.add("show_enquiry");
        }


    }, 5000);
}
// show_enquiry();



//feedback form activation

var btn = document.querySelector('.feedback_btn');
var close_btn = document.querySelector(".close_btn");
var feedback_form = document.querySelector("#feedback_form");

btn.onclick = () =>{
    var feedback = document.querySelector(".feedback");
    feedback.classList.add("feedback_active");
}
close_btn.onclick = () =>{
    var feedback = document.querySelector(".feedback");
    feedback.classList.remove("feedback_active");
}
feedback_form.onsubmit = () =>{
    var feedback = document.querySelector(".feedback");
    feedback.classList.remove("feedback_active");

}
