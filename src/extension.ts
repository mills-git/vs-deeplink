// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when the extension is activated
// The extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('The extension "deeplink" is now active!');

	// The command is defined in the package.json file
	let command1 = vscode.commands.registerCommand('deeplink.copyLocalLink', () => {

		// The display message
		vscode.window.showInformationMessage('Copy local DeepLink!');

		// Get the active editor
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor) {
			// Get the path of the current file
			const filePath = activeEditor.document.fileName;
			// Create a deeplink
			const deeplink = `vscode://file/${filePath}`;
			// Extract the base name of the file path
			const baseName = path.basename(filePath);
			// Make a markdown link
			const link = `[${baseName}](${deeplink})`;

			// Copy the absolute path to the clipboard
			vscode.env.clipboard.writeText(link).then(
				() => {
					vscode.window.showInformationMessage('Absolute path copied to clipboard!');
				},
				(error) => {
					vscode.window.showErrorMessage(`Failed to copy absolute path: ${error}`);
				}
			);
			} else {
				vscode.window.showInformationMessage('No active editor found.');
			}
	});


	context.subscriptions.push(command1);

}
