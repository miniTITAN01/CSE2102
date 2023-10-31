import http.server
import socketserver
from http import HTTPStatus
import urllib.parse  # Add this import statement

class Handler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/feedback':
            self.send_response(HTTPStatus.OK)
            self.end_headers()
            feedback_form = """
                <html>
                <head><title>Feedback Form</title></head>
                <body>
                    <h1>Feedback Form</h1>
                    <form method="POST" action="/submit_feedback">
                        <label for="name">Name:</label><br>
                        <input type="text" id="name" name="name"><br><br>
                        
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email"><br><br>
                        
                        <label for="message">Message:</label><br>
                        <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
                        
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>
            """
            self.wfile.write(bytes(feedback_form, "utf-8"))
            print(f"Received POST request for path: {self.path}")
        else:
            self.send_response(HTTPStatus.OK)
            self.end_headers()
            my_str = 'Hello World'
            self.wfile.write(bytes(my_str, "utf-8"))

    def do_POST(self):
        
        if self.path == '/submit_feedback':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            form_data = urllib.parse.parse_qs(post_data)
            name = form_data.get('name', [''])[0]
            email = form_data.get('email', [''])[0]
            message = form_data.get('message', [''])[0]

            # Process the form data as needed
            # For demonstration, we'll print it to the console
            print(f"Name: {name}")
            print(f"Email: {email}")
            print(f"Message: {message}")

            # Send a response to the user
            self.send_response(HTTPStatus.OK)
            self.end_headers()
            response = "Thank you for your feedback! Your response has been recorded."
            self.wfile.write(bytes(response, "utf-8"))
        else:
            self.send_response(HTTPStatus.NOT_FOUND)
            self.end_headers()
            self.wfile.write(bytes("Page not found", "utf-8"))


if __name__ == '__main__':
    PORT = 8042
    httpd = socketserver.TCPServer(('', PORT), Handler)
    print(f'Serving on port {PORT}')
    httpd.serve_forever()
