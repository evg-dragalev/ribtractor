import { createClient } from 'contentful';

const client = createClient({
  space: 'okf166z1zmn1',
  accessToken: '9Xy7HLCON-0qXHCweAni2XDN8cs1SQA2l6XGrULSip0',
  host: 'cdn.contentful.com',
});

export default client;
