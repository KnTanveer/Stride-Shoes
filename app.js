const dailog = document.getElementById('header-menu');
const menuIcon = document.getElementById('header-menu');

menuIcon.addEventListener('clcik', () => {
    dialog.showModal();
});

dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();

    const isInDialog = (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );

    if (!isInDialog) {
      dialog.close();
    }
  });
