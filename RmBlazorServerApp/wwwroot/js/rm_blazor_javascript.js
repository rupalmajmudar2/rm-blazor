function RmTestAlert(p1, p2) {
    alert("Blazor JS Alert with params: " + p1 + " and " + p2);
}

function RmTestDOMUpdate(p1, p2) {
    document.getElementById('rmDivAuthors').innerText = "DOM Updated! With " + p1 + "&" + p2;
}

function GetCities() {
    cities = ['Mumbai', 'Bangalore', 'Zurich']
    return cities;
}