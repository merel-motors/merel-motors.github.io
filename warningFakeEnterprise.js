function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', function() {
    if(document.cookie !== "warningSeen=true") {
        const warningDiv = document.getElementById("warning_fake_enterprise");
        warningDiv.style.display = "flex";
        toggleBodyScroll(true);
        
        const okButton = document.getElementById("ok_button");
        
        okButton.addEventListener("click", function() {
            warningDiv.style.display = "none";
            toggleBodyScroll(false);
            document.cookie = "warningSeen=true";
        });
    }
});