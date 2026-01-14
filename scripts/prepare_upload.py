import os
import json

# Configuration
ROOT_DIR = "."
OUTPUT_FILE = ".tmp/files_to_upload.json"
IGNORED_DIRS = {
    'node_modules', '.git', 'dist', 'build', '__pycache__', '.tmp', 
    '.gemini', '.agent', '.vscode', '.idea'
}
IGNORED_FILES = {
    '.env', '.DS_Store', 'package-lock.json', 'yarn.lock' # Optional: ignore lock files if desired, but usually good to keep. Let's keep lock files.
}
IGNORED_EXTENSIONS = {
    '.exe', '.dll', '.so', '.dylib', '.bin', '.pyc', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.mp4' # Binary files to skip for now to avoid text encoding issues
}

def is_ignored(path, is_dir=False):
    name = os.path.basename(path)
    if name in (IGNORED_DIRS if is_dir else IGNORED_FILES):
        return True
    if not is_dir and os.path.splitext(name)[1].lower() in IGNORED_EXTENSIONS:
        return True
    return False

def collect_files(root_dir):
    files_to_upload = []
    
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Modify dirnames in-place to skip ignored directories
        dirnames[:] = [d for d in dirnames if not is_ignored(os.path.join(dirpath, d), is_dir=True)]
        
        for filename in filenames:
            file_path = os.path.join(dirpath, filename)
            if is_ignored(file_path):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Normalize path to forward slashes for consistency
                relative_path = os.path.relpath(file_path, root_dir).replace('\\', '/')
                
                files_to_upload.append({
                    "path": relative_path,
                    "content": content
                })
            except UnicodeDecodeError:
                print(f"Skipping binary or non-utf8 file: {file_path}")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                
    return files_to_upload

def main():
    if not os.path.exists('.tmp'):
        os.makedirs('.tmp')
        
    print(f"Scanning files in {os.path.abspath(ROOT_DIR)}...")
    files = collect_files(ROOT_DIR)
    print(f"Found {len(files)} files to upload.")
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(files, f, indent=2)
        
    print(f"Saved file list to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
