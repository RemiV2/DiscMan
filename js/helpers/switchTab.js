export default newTab => {
  // Only trigger if clicked tab isn't active
  if (!document.querySelector(`li.tab.active#${newTab}`)) {
    // Update tabs
    const tabs = document.querySelectorAll('.tab')
    for (const tab of tabs) {
      if (tab.getAttribute('id') === newTab) {
        tab.classList.add('active')
      } else {
        tab.classList.remove('active')
      }
    }

    // Update page content  
    const sections = document.querySelectorAll('.content')
    for (const section of sections) {
      if (section.dataset.section === newTab) {
        section.classList.add('active')
      } else {
        section.classList.remove('active')
      }
    }
  }
}
