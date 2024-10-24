// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['react-particle-backgrounds', '@chakra-ui/react'], // Add any dependencies that cause the issue here
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs() // Add this plugin
  ],
  optimizeDeps: {
    include: ['hoist-non-react-statics'] // Ensure Vite handles it correctly
  }
});

