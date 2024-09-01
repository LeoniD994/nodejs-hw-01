import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const readContacts = async () => {
  try {
    const filePath = path.resolve(PATH_DB);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts data');
  }
};
