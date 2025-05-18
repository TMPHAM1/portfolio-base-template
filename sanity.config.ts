import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { colorInput } from "@sanity/color-input";

const config = defineConfig({
  projectId: "k2hvoik0",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-08-23",
  basePath: "/admin",
  plugins: [structureTool(), colorInput()],
  schema: { types: schemas },
});

export default config;
