# Astro Notes

Astro uses `getStaticPaths()` to generate pages from database/API data:

---

// src/pages/posts/[id].astro

```ts
export async function getStaticPaths() {
  const posts = await db.query("SELECT id, title FROM posts");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}
const { id } = Astro.params;
const { post } = Astro.props;
```

---

```html
<h1>{post.title}</h1>
<p>{post.content}</p>
```

Key points:

- [id].astro creates dynamic routes
- getStaticPaths() runs at build time to generate all paths
- Map database rows to { params, props } objects
- Astro.params gives route params, Astro.props gives data

For SSR instead of SSG, set output: 'server' in astro.config.mjs and fetch data directly in the component.

Astro supports both markdown files and database/API collections for populating site content:

**1. Content Collections (markdown/MDX files)**

```astro
// src/content/config.ts
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date()
  })
});

// src/pages/blog/[slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post }
  }));
}
```

**2. Data Collections (database/API)**

```ts
// src/content/config.ts
const products = defineCollection({
  loader: async () => {
    const res = await fetch("https://api.example.com/products");
    return res.json();
  },
});
```

**3. Hybrid approach** - Mix both in `getStaticPaths()`:

```astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const products = await db.query('SELECT * FROM products');

  return [
    ...posts.map(p => ({ params: { type: 'blog', slug: p.slug }, props: p })),
    ...products.map(p => ({ params: { type: 'product', slug: p.slug }, props: p }))
  ];
}
```

Same pattern for both: fetch data → map to `{ params, props }` → generate static HTML at build time.
