// HOME TO GIFT PAGE

function goToGifts(){

    document.getElementById("homePage").style.display = "none";

    document.getElementById("giftPage").style.display = "flex";

}



// GIFT PAGE TO FINAL PAGE

function goToFinalPage(){

    document.getElementById("giftPage").style.display = "none";

    document.getElementById("finalPage").style.display = "flex";

}



// OPEN MEMORY CARD

function toggleCard(element){

    let card = element.parentElement.querySelector(".memory-card");

    card.classList.toggle("show");

}

// EXIT WEBSITE

// EXIT WEBSITE

function exitWebsite(){

    document.body.innerHTML = `

    <div class="goodbye-screen">

        <div class="goodbye-content">

            <h1>
                Thank You Aai ❤️
            </h1>

            <p>
                Every memory with you is my favorite treasure 🌸
            </p>

            <div class="big-heart">
                💖
            </div>

        </div>

    </div>

    `;
}



// HEART CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// MOBILE TAP HEART EFFECT

document.addEventListener("click",(e)=>{

    if(window.innerWidth <= 768){

        let heart = document.createElement("div");

        heart.className = "tap-heart";

        heart.innerHTML = "💖";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },1000);

    }

});