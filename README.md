# 🕉 @sensethenlove/slug


### 🙏 Description
* Helper function to create a slug (does not require Svelte) & a Svelte component to generate slugs in the browser (requires Svelte)


### 💎 How it works
* All lower case
* Replace all spaces with a dash
* Remove all these characters !@#$%^&*()_+=;':",./<>?\|~`%&¢£¥€©®™·

<img src="https://imagedelivery.net/awgX85h4ifgiJaXRhZTMNw/a98eb469-f3e8-449e-0921-3829b7b94500/public" />


### ☯️ Install
```bash
pnpm add @sensethenlove/slug
```


### 💙 Example: Slug function
```ts
import { slug } from '@sensethenlove/slug'

const response = slug('Hello World 123')
```

### 💛 Example: Slug component
```ts
<script lang="ts">
  import { Slug } from '@sensethenlove/slug'
</script>

<Slug />
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
