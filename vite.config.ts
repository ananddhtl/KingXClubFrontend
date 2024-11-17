import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType:"prompt",
  includeAssets:['favicon.ico', "apple-touch-icon.png"],
  manifest:{
    name:"King's Club",
    short_name:"King's Club",
    description:"King's Club | Try your Luck",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    }
  ],
  theme_color:'#fe480f',
  background_color:'#240700',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    svgr(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Set the limit to 4 MiB
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Enable PWA development mode
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});


