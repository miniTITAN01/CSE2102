import http.server
import socketserver
from http import HTTPStatus
import urllib.parse
import requests

class Handler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        query_params = urllib.parse.parse_qs(parsed_url.query)
        
        if 'locations' in query_params:
            locations = query_params['locations']
            weather_info = self.get_weather_for_locations(locations)
            
            if weather_info:
                self.send_response(HTTPStatus.OK)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(bytes(weather_info, "utf-8"))
            else:
                self.send_error(HTTPStatus.NOT_FOUND, "Weather information not available for some locations")
        else:
            self.send_error(HTTPStatus.BAD_REQUEST, "Please provide 'locations' parameter in the URL")

    def get_weather_for_locations(self, locations):
        weather_info = []
        for location in locations:
            weather_data = self.get_weather(location)
            if weather_data:
                weather_info.append(f"Weather in {location}: {weather_data}")
        
        return "<br>".join(weather_info)

    def get_weather(self, location):
        # You should replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        API_KEY = 'YOUR_API_KEY'
        api_url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}&units=metric'
        
        try:
            response = requests.get(api_url)
            if response.status_code == 200:
                weather_json = response.json()
                temperature = weather_json['main']['temp']
                description = weather_json['weather'][0]['description']
                return f"{description}, Temperature: {temperature}°C"
            else:
                return f"Weather data not available for {location}"
        except requests.exceptions.RequestException as e:
            print(f"Error fetching weather data: {e}")
            return None

if __name__ == '__main__':
    PORT = 8002
    httpd = socketserver.TCPServer(('', PORT), Handler)
    print(f'Serving on port {PORT}')
    httpd.serve_forever()
