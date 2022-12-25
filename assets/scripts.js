const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".doublediv")[0].classList.add("animateleft");
            document.querySelectorAll(".fakeclass")[0].classList.add("animateright");
        }

    })

});
observer.observe(document.querySelector(".row"));




function copyEmail() {
    navigator.clipboard.writeText
        ("amileshnanthakumaran@cmail.carleton.ca");
    alert("Email copied to your clipboard");
}
