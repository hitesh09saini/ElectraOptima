
let map = document.getElementById('map');
        document.addEventListener('DOMContentLoaded', () => {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;

                map.innerHTML = `<iframe width="300" height="200" src="https://map.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;

            })

});
