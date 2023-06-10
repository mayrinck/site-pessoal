const ContactTrigger = document.getElementById("contact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");

ContactTrigger.addEventListener("click", () => {
    ContactDialog.showModal();
});

ContactAbort.addEventListener("click", () => {
    ContactDialog.close();
});