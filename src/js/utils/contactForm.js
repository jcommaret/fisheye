export default function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

export default function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
