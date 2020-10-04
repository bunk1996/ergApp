import base64

def encode(path):
    with open(path, 'rb') as f:
        contents = f.read()
    z = base64.b64encode(contents)
    return z

def decode(data):
    z = base64.b64decode(data)
    y = open('image_out.jpg', 'wb')
    y.write(z)
    y.close()
