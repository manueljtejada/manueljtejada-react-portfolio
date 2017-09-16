import { createClient } from 'contentful';

export const client = createClient({
  space: '6xp2rtshrvle',
  accessToken: '745b24a73f5431f32922529b78da53c3296101a722c2eac6047b611ffff00e92',
});

export const getEntry = entry => client.getEntry(entry);

export const getEntries = options => client.getEntries(options);
