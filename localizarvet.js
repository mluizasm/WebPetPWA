if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, 'fetched');
    });
} else {
  console.log('Geolocation API not supported.');
}

function appendLocation(location) {
    let srcAtual = "https://www.google.com/maps/d/u/0/embed?mid=1RQL4Kcu9okkpC6m9j41lwb5hMaubs5Y&ll=" + location.coords.latitude +', '+ location.coords.longitude + "&z=14&noprof=1&ehbc=B264ED"
    document.getElementsByTagName("iframe")[0].src = srcAtual;
}