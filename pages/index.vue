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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserSteps from "~/components/UserSteps.vue";
import OurPlatform from "~/components/OurPlatform.vue";
import RescuePlanet from "~/components/RescuePlanet.vue";
import ContactUs from "~/components/ContactUs.vue";
import Blog from "~/components/Blog.vue";
import Companies from "~/components/Companies.vue";
import NewsletterModal from "~/components/NewsletterModal.vue";

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
    NewsletterModal
  },
  data() {
    return {
      modal: null,
      timeoutId: null,
      LOCAL_STORAGE_MODAL_KEY: 'isModalShown'
    }
  },
  mounted() {
    //@ts-ignore
    this.$refs.modalComponentRef.$refs.modalRef.on
    //@ts-ignore
    this.modal = new bootstrap.Modal(this.$refs.modalComponentRef.$refs.modalRef, {})
    console.log('localStorage')
    //@ts-ignore
    const localStorageModal = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_MODAL_KEY))
    if (localStorageModal && new Date().getTime() > localStorageModal.timestamp + 1000 * 60 * 60 * 24) {
      localStorage.removeItem(this.LOCAL_STORAGE_MODAL_KEY)
    }
    if (!localStorageModal) {
      //@ts-ignore
      this.timeoutId = setTimeout(() => {
        if (this.modal) {
          //@ts-ignore
          this.modal.show();
          const localStorageModal = {value: true, timestamp: new Date().getTime()}
          localStorage.setItem(this.LOCAL_STORAGE_MODAL_KEY, JSON.stringify(localStorageModal));
        }
      }, 8000)
    }
  },
  beforeDestroy() {
    if (this.timeoutId) {
      //@ts-ignore
      clearTimeout(this.timeoutId)
    }
  },

  methods: {
    closeModal() {
      if (typeof this.modal !== 'undefined' && this.modal !== null) {
        //@ts-ignore
        this.modal.hide();
      }
    }
  }
})
;
</script>
