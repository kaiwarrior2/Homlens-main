import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server started!")
    print(f"Address: http://localhost:{PORT}")
    print(f"Main page: http://localhost:{PORT}/index.html")
    print(f"Education: http://localhost:{PORT}/education.html")
    print(f"Admin panel: http://localhost:{PORT}/admin.html")
    print("\nPress Ctrl+C to stop\n")
    
    webbrowser.open(f'http://localhost:{PORT}/index.html')
    
    httpd.serve_forever()
