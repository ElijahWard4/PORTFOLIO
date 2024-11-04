
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
  },
  server: {
    proxy: {
      '/send-email': 'http://localhost:5001', // Proxy requests to your backend
    },
  },
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
  // server: {
  //   proxy: {
  //     '/send-email': 'http://localhost:5001', // Proxy requests to your backend
//     },
//   },
// });

