import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function generateContacts(count) {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: count }, () => createFakeContact());
  const updatedContacts = existingContacts.concat(newContacts);

  await writeContacts(updatedContacts);
  console.log(`Generated ${count} contacts.`);
}

const [, , countArg] = process.argv;
const count = Number(countArg);

if (!count || isNaN(count) || count < 1) {
  console.error('Please provide a valid number of contacts to generate.');
  process.exit(1);
}

generateContacts(count);
