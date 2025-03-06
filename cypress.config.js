import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      const environment = config.env.environment || "local";

      const environments = {
        local: {
          baseUrl: "http://127.0.0.1:5501",
        },
        production: {
          baseUrl:
            "https://nishune.github.io/Hacker-Escape-Rooms-Group-Project",
        },
      };

      config.baseUrl = environments[environment].baseUrl;

      return config;
    },
  },
});
