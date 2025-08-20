import { writeFileSync } from 'fs';
import { dataSchema } from '../lib/zod';
import { zodToTs } from 'zod-to-ts';

const { node } = zodToTs(dataSchema, 'SiteData');
writeFileSync('lib/generated.d.ts', node); // placeholder
