console.log("JS is running");

const openEnvelopeButton = document.querySelector("#open-envelope");
const flap = document.querySelector("#flap");
const envelope = document.querySelector("#envelope");
const card = document.querySelector("#card");
const message = document.querySelector("#message");
const images = document.querySelector("#images");

function openEnvelope() {
    envelope.style.transform = "scale(0.7)";
    envelope.style.marginTop = "50px";

    setTimeout(function () {
        flap.classList.toggle("open");
    }, 1000);

    setTimeout(function () {
        card.classList.toggle("open");
        message.style.display = "block";
        images.style.display = "flex";
        flap.style.display = "none";
    }, 2000)
}

openEnvelopeButton.addEventListener('click', openEnvelope);


//Refresh Page 
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', function() {
    location.reload();
});
