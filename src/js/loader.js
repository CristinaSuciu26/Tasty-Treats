export function showLoader() {
    document.getElementById("loader").style.display = "flex";

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 500);
}
