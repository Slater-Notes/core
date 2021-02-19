export interface UserItem {
  readonly id: string;
  readonly salt: string;
  readonly iterations: number;
  readonly fileCollectionNonce: string;
  readonly settingsNonce: string;
  cloudSyncSessionToken?: string;
  cloudLastSynced?: number; // unix time in seconds
  username: string;
}
