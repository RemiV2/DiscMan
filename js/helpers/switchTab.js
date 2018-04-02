export default newTab => {
  // Only trigger if clicked tab isn't active
  if (!document.querySelector(`li.tab.active#${newTab}`)) {
    // Update tabs
    const tabs = document.querySelectorAll('tab')
    tabs.forEach(tab => {
      // Remove tab focus
      if (!tab.classList.contains(newTab)) {
        console.log('remove')
        tab.classList.remove('active')
      } else {
        // Focus new tab
        console.log('add')
        tab.classList.add('active')
      }
    })
  }
}
