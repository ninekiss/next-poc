## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Prettier

```bash
pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

add prettier config file

`.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "endOfLine": "lf"
}
```

`.prettierignore`

```
# Ignore artifacts:
node_modules
.next
build
dist
public
./pnpm-lock.yaml
```

**formart**
```bash
pnpx prettier --write .
```
