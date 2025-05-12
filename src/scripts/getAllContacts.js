import { readContacts } from '../utils/readContacts.js';
async function getAllContacts() {
  const contacts = await readContacts();
  console.log('All contacts:', contacts);
  return contacts;
}

getAllContacts();
