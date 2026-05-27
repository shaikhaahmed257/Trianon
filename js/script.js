document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    Object.assign(lightbox.style, {
        position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)", display: "none", justifyContent: "center",
        alignItems: "center", zIndex: "1000"
    });
    
    const lightboxImg = document.createElement("img");
    Object.assign(lightboxImg.style, { maxWidth: "85%", maxHeight: "85%", borderRadius: "2px", border: "2px solid #c5a880" });
    
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    Object.assign(closeBtn.style, {
        position: "absolute", top: "20px", right: "30px", color: "white",
        fontSize: "45px", cursor: "pointer"
    });
    
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    const menuImages = document.querySelectorAll(".menu-card img");
    menuImages.forEach(image => {
        image.style.cursor = "pointer";
        image.addEventListener("click", () => {
            lightboxImg.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });

    let totalCartAmount = 0;
    const orderButtons = document.querySelectorAll(".order-btn");
    
    orderButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const price = parseFloat(e.target.getAttribute("data-price")) || 0;
            totalCartAmount += price;
            
            const totalDisplay = document.getElementById("cart-total");
            if (totalDisplay) {
                totalDisplay.innerText = `Current Total: ${totalCartAmount.toFixed(3)} BHD`;
                totalDisplay.style.color = "#c5a880";
                totalDisplay.style.fontWeight = "bold";
            }
        });
    });

    //Form error messages
document.getElementById("bookingForm").addEventListener("submit", function(e) {
e.preventDefault();

    const fname = document.getElementById ('fname').value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;


   

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const dateError = document.getElementById("dateError");
    const timeError = document.getElementById("timeError");
    const guestsError = document.getElementById("guestsError");


    const bookingForm = document.getElementById("bookingForm");
    const bookingSuccess = document.getElementById("bookingSuccess");


fnameError.innerText = "";
lnameError.innerText = "";
emailError.innerText = "";
phoneError.innerText = "";
dateError.innerText = "";
timeError.innerText = "";
guestsError.innerText = "";

let isValid = true;

    if (fname === ""){
        fnameError.innerText = "Please enter your first name";
        fnameError.style.color = "red";
        isValid = false;
    }

    if (lname === ""){
        lnameError.innerText = "Please enter your last name";
        lnameError.style.color = "red";
        isValid = false;
    }

    if (email === ""){
        emailError.innerText = "Please enter your email";
        emailError.style.color = "red";
        isValid = false;
    }

    else if(!email.includes("@") || !email.includes(".")){
        emailError.innerText = "Email must have @ and .";
        emailError.style.color = "red";
        isValid = false;
    }

    if (phone === ""){
        phoneError.innerText = "Please enter your phone number";
        phoneError.style.color = "red";
        isValid = false;
    }

    if (date === ""){
        dateError.innerText = "Please select a date";
        dateError.style.color = "red";
        isValid = false;
    }

    if (time === ""){
        timeError.innerText = "Please select a time";
        timeError.style.color = "red";
        isValid = false;
    }

    if (guests === ""){
        guestsError.innerText = "Please select guests number";
        guestsError.style.color = "red";
        isValid = false;
    }
    
    

    if (isValid){
        bookingForm.style.display = "none";
        bookingSuccess.style.display = "block";
    }
});
});
