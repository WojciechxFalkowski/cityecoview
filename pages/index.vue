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
      modal: null
    }
  },
  mounted() {
    console.log('modalRef')
    console.log(this.$refs.modalComponentRef.$refs.modalRef);
    this.$refs.modalComponentRef.$refs.modalRef.on
    this.modal = new bootstrap.Modal(this.$refs.modalComponentRef.$refs.modalRef, {})

    setTimeout(() => {
      this.modal.show()
    }, 5000)
  },
  methods: {
    closeModal() {
      this.modal.hide();
    }
  }
});
</script>
