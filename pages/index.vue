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

export default Vue.extend({
  components: {ContactUs, RescuePlanet, Blog, Companies, OurPlatform, UserSteps}
});
</script>

<style lang="scss">
* {
}
</style>
