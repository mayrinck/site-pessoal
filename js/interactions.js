const ContactTrigger = document.getElementById("contact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");
const CloseTrigger = document.getElementById("close");


ContactTrigger.addEventListener("click", () => {
    ContactDialog.showModal();
});

CloseTrigger.addEventListener("click", () => {
    ContactDialog.close();
});