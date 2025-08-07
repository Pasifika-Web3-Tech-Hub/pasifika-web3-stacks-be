/// <reference types="vitest" />
/// <reference types="./types/global" />

import { defineConfig } from "vite";
import { vitestSetupFilePath, getClarinetVitestsArgv } from "@hirosystems/clarinet-sdk/vitest";
import path from "path";

/*
  This Vitest configuration is specific to the tiny-market project.
  It configures Clarinet SDK to use the local Clarinet.toml file.
*/

export default defineConfig({
  test: {
    environment: "clarinet", // use vitest-environment-clarinet
    pool: "forks",
    poolOptions: {
      threads: { singleThread: true },
      forks: { singleFork: true },
    },
    setupFiles: [
      vitestSetupFilePath,
      // custom setup files can be added here
    ],
    environmentOptions: {
      clarinet: {
        ...getClarinetVitestsArgv(),
        // Explicitly specify the manifest path to use the local Clarinet.toml
        manifest: "./Clarinet.toml",
        // add or override other options as needed
      },
    },
    // Include type definitions
    typecheck: {
      include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  },
});
