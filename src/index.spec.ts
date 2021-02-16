import test from 'ava';
import {
  localDB,
  FolderItem,
  getKeyFromDerivedPassword,
  decrypt,
  encrypt,
  getKeyFromPassword,
  digest,
  exportKey,
} from '.';

test('exports localDB', (t) => {
  t.truthy(new localDB());
});

test('exports note interfaces', (t) => {
  const folder: FolderItem = {
    id: 'testfolder',
    title: 'Test Folder',
    created: 1234,
    updated: 1234,
  };

  t.truthy(folder);
});

test('exports crypto functions', (t) => {
  t.truthy(decrypt);
  t.truthy(encrypt);
  t.truthy(getKeyFromDerivedPassword);
  t.truthy(getKeyFromPassword);
  t.truthy(digest);
  t.truthy(exportKey);
});
