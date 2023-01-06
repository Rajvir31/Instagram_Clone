import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import user from "./schemas/user.js";
import post from "./schemas/post.js";

export default defineConfig({
  name: 'default',
  title: 'INSTAGRAM_CLONE',

  projectId: '0rqjjani',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([user, post]),
  },
})
