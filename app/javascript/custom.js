import { Sidebar } from '@coreui/coreui'

document.addEventListener('DOMContentLoaded', () => {
  const sidebarElement = document.querySelector('#sidebar');
  
  if (sidebarElement) {
    try {
      const sidebar = new Sidebar(sidebarElement);
      const toggleButton = document.querySelector('.header-toggler');
      const closeButton = document.querySelector('.close-btn'); // Adjust the selector to match your close button

      if (toggleButton) {
        toggleButton.addEventListener('click', () => {
          sidebar.toggle();
        });
      } else {
        console.error('Toggle button with class "header-toggler" not found.');
      }

      if (closeButton) {
        closeButton.addEventListener('click', () => {
          sidebar.hide();
        });
      } else {
        console.error('Close button with class "close-btn" not found.');
      }
    } catch (error) {
      console.error('Error initializing CoreUI Sidebar:', error);
    }
  } else {
    console.error('Sidebar element with ID "sidebar" not found.');
  }
});
