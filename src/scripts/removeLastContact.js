import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }

  const removedContact = contacts.pop();
  await writeContacts(contacts);
  console.log('Removed last contact:', removedContact);
}
removeLastContact();
