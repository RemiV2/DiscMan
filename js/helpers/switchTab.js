export default newTab => {
  const tabs = document.querySelectorAll('tab')
  tabs.forEach(tab => {
    // Remove tab focus
    if (!tab.classList.contains('newTab')) {
      tab.classList.remove('active')
    } else {
      // Focus new tab
      tab.classList.add('active')
    }
  })
}