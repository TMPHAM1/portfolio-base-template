import {defineConfig} from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "k2hvoik0",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-08-23",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;
