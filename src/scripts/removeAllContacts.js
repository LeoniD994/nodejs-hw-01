import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContactsArray = [];

    await writeContacts(emptyContactsArray);

    console.log('All contacts have been removed successfully.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
    throw error;
  }
};

removeAllContacts();
