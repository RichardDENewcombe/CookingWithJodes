const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [],
  layout: {
    recipe: "./src/lib/layouts/recipe-layout.svelte"
  }
};

export default config;