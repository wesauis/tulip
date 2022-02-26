declare interface Window {
  showOpenFilePicker(
    options: FilePickerOptions
  ): Promise<FileSystemFileHandle[]>;
}
