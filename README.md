# https://ourneighborhoodtip.store
# https://supabase.com/dashboard/project/dbdnvjbkotlyarsfmtjn
코드 수정시 뭐 수정했는지 적어주길 바람

## Running tests

Install dependencies with `npm install` (requires internet access) and run:

```bash
npm test
```

The test suite uses **Jest** with the **jsdom** environment. After installing
dependencies you can execute all tests with the command above.

## Supabase configuration

The Supabase anonymous key has been rotated. Create an `env.js` file in the
project root containing your new credentials:

```javascript
export const SUPABASE_URL = 'https://dbdnvjbkotlyarsfmtjn.supabase.co';
export const SUPABASE_KEY = '<newly-issued-key>'; // replace with your key
```

This file is listed in `.gitignore` so it will not be committed.
