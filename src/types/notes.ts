import { OutputData } from '@editorjs/editorjs';

export interface FolderItem {
  readonly id: string;
  title: string;
  created: number; // unix timestamp (seconds)
  updated: number; // unix timestamp (seconds)
  isStarred?: boolean;
  isDeleted?: boolean;
}

export interface NoteItem {
  readonly id: string;
  readonly nonce: string;
  title: string;
  created: number; // unix timestamp (seconds)
  updated: number; // unix timestamp (seconds)
  parentId?: string;
  isStarred?: boolean;
  isDeleted?: boolean;
}

export interface NoteData {
  readonly id: string;
  revisions: OutputData[];
}

export interface FileCollection {
  readonly userId: string;
  folders: FolderItem[];
  notes: NoteItem[];
}
