declare interface FileAccept {
  [mimeType: string]: string[];
}

declare interface FileType {
  description: string;
  accept: FileAccept;
}

declare interface FilePickerOptions {
  id: string;
  types: FileType[];
  excludeAcceptAllOption: boolean;
  multiple: boolean;
}

declare interface FileSystemWritableFileStream {
  locked: boolean;
  abort(): unknown;
  close(): unknown;
  getWriter(): unknown;
  seek(): unknown;
  truncate(): unknown;
  write(content: string): Promise<void>;
}

declare interface FileSystemFileHandle {
  name: string;
  getFile(): File;
  createWritable(): Promise<FileSystemWritableFileStream>;
}
