class Weather {
    constructor(city) {
        this.apiKey = '08f368e818354d91890162825201310';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}