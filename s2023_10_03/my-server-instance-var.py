#
# PORT 8093
#
#
# PORT 8093
#

import http.server
import socketserver
from http import HTTPStatus


class Handler(http.server.SimpleHTTPRequestHandler):

    i = 0
    def do_GET(self):
        Handler.i = 0
        self.send_response(HTTPStatus.OK)
        self.end_headers()
        my_str = 'class var Hello world :' + str(Handler.i)
        Handler.i = Handler.i+1
        self.wfile.write(bytes(my_str, 'utf-8'))


httpd = socketserver.TCPServer(('', 8095), Handler)
httpd.serve_forever()