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

Copy `env.example.js` to `env.js` and replace the placeholder values with your
Supabase credentials:

```bash
cp env.example.js env.js
```

```javascript
export const SUPABASE_URL = '<your-supabase-url>';
export const SUPABASE_KEY = '<your-supabase-key>';
```

`env.js` is listed in `.gitignore` so it will not be committed.

The project loads the Supabase client library from jsDelivr and pins it to a
specific version for stability. If you update the library, modify
`supabaseClient.js` to reference the desired version (currently `@supabase/supabase-js@2.39.7`).
