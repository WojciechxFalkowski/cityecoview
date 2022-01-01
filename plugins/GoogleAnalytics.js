import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: {
    id: "G-TDXYZLYVTL",
    'user_id': 'USER_ID',
    'cookie_prefix': 'google_analytics',
    'cookie_domain': 'cityecoview.com',
    'cookie_expires': 28 * 24 * 60 * 60  // 28 days, in seconds
  }
});
