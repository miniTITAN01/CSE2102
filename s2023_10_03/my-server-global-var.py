#
# PORT 8093
#
#
# PORT 8093
#
#
# PORT 8093
#

import http.server
import socketserver
from http import HTTPStatus

i = 0

class Handler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):
        global i
        self.send_response(HTTPStatus.OK)
        self.end_headers()
        my_str = 'global var Hello world :' + str(i)
        i = i+1
        self.wfile.write(bytes(my_str, 'utf-8'))


httpd = socketserver.TCPServer(('', 8094), Handler)
httpd.serve_forever()