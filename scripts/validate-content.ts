import { loadContent } from '../lib/content';

try {
  loadContent();
  console.log('Content valid');
} catch (e) {
  console.error(e);
  process.exit(1);
}
