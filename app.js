function openModal() {
    const dialog = document.getElementById('header-menu-modal');
    dialog.showModal(); 
}

document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById('header-menu-modal');

    dialog.addEventListener('click', function (event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});