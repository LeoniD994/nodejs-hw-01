import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const constants = await readContacts();
    return constants.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

console.log(await countContacts());
