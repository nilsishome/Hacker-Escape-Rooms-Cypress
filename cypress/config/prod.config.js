import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        supportFile: false,
        baseUrl:"https://nilsishome.github.io/Hacker-Escape-Rooms-Cypress/",
    },
});