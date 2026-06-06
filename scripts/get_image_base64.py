import base64
import os

file_path = r"c:\Users\LENOVO\Desktop\CODE\Antigravity - Apps\Propuesta - Vakdor\website\public\logo.png"

try:
    with open(file_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        print(encoded_string)
except Exception as e:
    print(f"Error: {e}")
