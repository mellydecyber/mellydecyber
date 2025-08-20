import fs from 'fs';
import path from 'path';
import { dataSchema, SiteData } from './zod';

export function loadContent(): SiteData {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/data.json'), 'utf-8');
  const json = JSON.parse(file);
  const parsed = dataSchema.safeParse(json);
  if (!parsed.success) {
    throw new Error('Invalid content: ' + parsed.error.message);
  }
  return parsed.data;
}
