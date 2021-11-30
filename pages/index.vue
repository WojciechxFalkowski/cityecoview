<template>
  <div>
    <Header/>
    <main>
      <UserSteps/>
      <OurPlatform/>
      <RescuePlanet/>
      <Blog/>
      <Companies/>
      <ContactUs/>
      <NewsletterModal ref="modalComponentRef" @handleCloseModal="closeModal"/>
    </main>
    <CookiesPrivacyPolicy v-if="isShownCookiePrivacyPolicy" @set-cookies="setCookiePrivacyPolicy"
                          @close-cookie="closeCookiePrivacyPolicy"/>
  </div>
</template>

<script>
import Vue from "vue";
import UserSteps from "~/components/UserSteps.vue";
import OurPlatform from "~/components/OurPlatform.vue";
import RescuePlanet from "~/components/RescuePlanet.vue";
import ContactUs from "~/components/ContactUs.vue";
import Blog from "~/components/Blog.vue";
import Companies from "~/components/Companies.vue";
import NewsletterModal from "~/components/NewsletterModal.vue";
import CookiesPrivacyPolicy from "~/components/CookiesPrivacyPolicy.vue";

export default Vue.extend({
  head() {
    return {
      title: "CityEcoView: Spot&Change"
    };
  },
  components: {
    ContactUs,
    RescuePlanet,
    Blog,
    Companies,
    OurPlatform,
    UserSteps,
    NewsletterModal,
    CookiesPrivacyPolicy
  },
  data() {
    return {
      modal: null,
      timeoutId: null,
      LOCAL_STORAGE_MODAL_KEY: 'isModalShown',
      COOKIES_PRIVACY_POLICY: 'cookies_privacy_policy',
      isShownCookiePrivacyPolicy: false,
    }
  },
  mounted() {
    this.$refs.modalComponentRef.$refs.modalRef.on
    this.modal = new bootstrap.Modal(this.$refs.modalComponentRef.$refs.modalRef, {})
    const localStorageModal = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_MODAL_KEY))
    if (localStorageModal && new Date().getTime() > localStorageModal.timestamp + 1000 * 60 * 60 * 24) {
      localStorage.removeItem(this.LOCAL_STORAGE_MODAL_KEY)
    }
    if (!localStorageModal) {
      this.timeoutId = setTimeout(() => {
        if (this.modal) {
          this.modal.show();
          const localStorageModal = {value: true, timestamp: new Date().getTime()}
          localStorage.setItem(this.LOCAL_STORAGE_MODAL_KEY, JSON.stringify(localStorageModal));
        }
      }, 8000)
    }
    this.isShownCookiePrivacyPolicy = !this.isCookieSet
  },
  beforeDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  },

  methods: {
    closeCookiePrivacyPolicy() {
      this.isShownCookiePrivacyPolicy = false
    },
    closeModal() {
      if (typeof this.modal !== 'undefined' && this.modal !== null) {
        this.modal.hide();
      }
    },
    setCookiePrivacyPolicy() {
      if (document) {
        document.cookie = `${this.COOKIES_PRIVACY_POLICY}=true`
        this.isShownCookiePrivacyPolicy = !(document.cookie.indexOf(this.COOKIES_PRIVACY_POLICY) > -1)
      }
    }
  },
  computed: {
    isCookieSet() {
      return (document.cookie.indexOf(this.COOKIES_PRIVACY_POLICY) > -1)
    }
  },
})
;
</script>
