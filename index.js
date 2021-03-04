const currentSite = window.location.hostname;
document.title = currentSite;
document.getElementById('site-name').innerText = currentSite.toUpperCase();