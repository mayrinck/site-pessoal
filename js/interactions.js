const ContactTrigger = document.getElementById("contact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");
const CloseTrigger = document.getElementById("close");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

ContactTrigger.addEventListener("click", () => {
    ContactDialog.showModal();
});

CloseTrigger.addEventListener("click", () => {
    ContactDialog.close();
});