const showAlert = () => {
    const userResponse = confirm("Do you want help finding a service?");
    if (userResponse) {
        document.getElementById("navBar").style.display = "block";
    } else {
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                closeAlert();
            }
        });
        document.addEventListener('click', (event) => {
            if (event.target.id === "alertOverlay") {
                closeAlert();
            }
        });
    }
};
