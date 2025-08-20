import { describe, it, expect } from 'vitest';
import { loadContent } from '../../lib/content';

describe('content loader', () => {
  it('loads and validates data.json', () => {
    const data = loadContent();
    expect(data.profile.name).toBe('Melli Tiara');
  });
});
