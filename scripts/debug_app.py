
import re

def count_tags(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    open_divs = 0
    close_divs = 0
    
    stack = []

    for i, line in enumerate(lines):
        # simple regex for <div and </div
        # Note: this is a heuristic, won't handle comments perfectly if they look like tags, 
        # but in this file comments use {/* ... */} so it should be fine mostly.
        
        # Remove JSX comments
        line_no_comments = re.sub(r'{\s*/\*.*?\*/\s*}', '', line)
        
        opens = line_no_comments.count('<div')
        closes = line_no_comments.count('</div')
        
        open_divs += opens
        close_divs += closes
        
        if opens > 0 or closes > 0:
            print(f"Line {i+1}: +{opens} -{closes} | Balance: {open_divs - close_divs}")

    print(f"Total Open: {open_divs}")
    print(f"Total Close: {close_divs}")
    print(f"Diff: {open_divs - close_divs}")

count_tags(r'c:/Users/LENOVO/Desktop/CODE/Antigravity - Apps/Propuesta - Vakdor/frontend/src/App.jsx')
