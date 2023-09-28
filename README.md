# DeepLink README

DeepLink is a Visual Studio Code extension that allows you to copy the path of the current open file and create a Markdown deeplink that will open the file in VS Code. This is useful for creating links to source files within your personal notes.

## Features

- **Copy Link**: Creates a markdown deeplink to the current file that can be used in personal note-taking tools like Obsidian, Notion, etc.

  Example:
  
  `[file.yaml](vscode://file//Users/username/repo/src/config/file.yaml)`
  
## Usage

1. Open a file in Visual Studio Code.
2. Invoke the DeepLink command by pressing ⇧⌘P and typing `deeplink` (or your configured keyboard shortcut).
3. The absolute path of the current file will be copied to your clipboard as a Markdown deeplink.
4. Paste the deeplink in your desired application or document.

## Requirements

- Visual Studio Code

## Extension Settings

This extension does not have any configurable settings.

## Known Issues

There are no known issues at the moment.

## Release Notes

### 1.0.3

Initial release of DeepLink extension.
