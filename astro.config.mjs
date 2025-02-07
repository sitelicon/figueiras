import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "de"],
  },
  routing: {
    prefixDefaultLocale: false,
  },
  integrations: [tailwind(), react()],
});
