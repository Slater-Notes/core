export interface UserItem {
    readonly id: string;
    readonly salt: string;
    readonly iterations: number;
    readonly fileCollectionNonce: string;
    readonly settingsNonce: string;
    username: string;
}
