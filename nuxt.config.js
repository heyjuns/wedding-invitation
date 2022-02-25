// const content = `
// Assalamu'alaikum Wr. Wb
// Bismillahirahmanirrahim.

// Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.

// Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir serta memberikan doa restu dan tetap menjalankan Protokol Kesehatan.
// `;

const title = 'Wedding Invitation Prien & Juanda';
const description = 'You are invited to our Wedding. Click the link to see the details';
const sImage = 'https://www.prienjuanda.site/_nuxt/img/IMG_0002.3a59d89.webp';
const image = 'http://www.prienjuanda.site/_nuxt/img/IMG_0002.3a59d89.webp';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wedding Invitation Prien & Juanda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.prienjuanda.site/' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Wedding Invitation' },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: title },

      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: sImage },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/webp' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1448' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1448' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Poppins: true,
      'Cormorant+Upright': [300, 400, 500, 600, 700],
      'STIX+Two+Text': [300, 400, 500, 600, 700],
      'Playfair+Display': [300, 400, 500, 600, 700],
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'bottom-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Wedding Invitation Prien & Juanda',
      short_name: 'Wedding Invitation'
    },
    icon: {
      purpose: 'any'
    },
    meta: {
      theme_color: '#ffff'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },

  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },
}
