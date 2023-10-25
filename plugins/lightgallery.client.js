import Lightgallery from 'lightgallery/vue/LightGalleryVue.umd.js';
import lgVideo from "lightgallery/plugins/video";
import s2 from 'lightgallery/css/lightgallery-bundle.min.css';
import s3 from 'lightgallery/css/lg-video.css';

export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.use(Lightgallery)
    return {
        provide: {
          Lightgallery,
          lgVideo
        }
      }
  })