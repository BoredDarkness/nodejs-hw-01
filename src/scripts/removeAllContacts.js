import { writeContacts } from '../utils/writeContacts.js';

async function removeAllContacts() {
  await writeContacts([]);
  console.log('All contacts have been removed.');
}

removeAllContacts();
