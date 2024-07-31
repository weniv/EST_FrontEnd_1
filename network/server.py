from http.server import BaseHTTPRequestHandler, HTTPServer


class CustomHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        data = [
            {"id": 1, "title": "notice 1", "content": "notice 1 content"},
            {"id": 2, "title": "notice 2", "content": "notice 2 content"},
            {"id": 3, "title": "notice 3", "content": "notice 3 content"},
        ]

        if self.path == "/a":
            self.wfile.write(b"<h1>a</h1>")
        elif self.path == "/b":
            self.wfile.write(b"<h1>b</h1>")
        elif self.path == "/c":
            self.wfile.write(b"<h1>c</h1>")
        elif self.path == "/notice/1":
            self.wfile.write(f"<h1>{data[0]['title']}</h1>".encode())
        elif self.path == "/notice/hello/world":
            data.append({"id": 4, "title": "hello", "content": "world"})
            self.wfile.write(f"<h1>{data[0]['title']}</h1>".encode())
        else:
            self.wfile.write(b"<h1>d</h1>")


def run_server(port=8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print(f"Starting server on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run_server()
