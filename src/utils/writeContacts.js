import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const writeContacts = async (updatedContacts) => {
  try {
    const filePath = path.resolve(PATH_DB);
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(filePath, data, 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Failed to write contacts data');
  }
};
