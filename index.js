let currentSite = window.location.hostname;
$(document).attr('title', currentSite);
$(`.site-name`).text(currentSite.toUpperCase());