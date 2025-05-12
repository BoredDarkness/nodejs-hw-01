import { readContacts } from '../utils/readContacts.js';
async function countContacts() {
  const contacts = await readContacts();
  const total = contacts.length;
  console.log(`Total contacts: ${total}`);
  return total;
}

countContacts();
