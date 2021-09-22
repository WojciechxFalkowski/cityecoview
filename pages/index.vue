<template>
  <div>
    <Header/>
    <main>
      <UserSteps/>
      <OurPlatform/>
      <RescuePlanet/>
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

export default Vue.extend({
  components: {ContactUs, RescuePlanet, OurPlatform, UserSteps}
});
</script>

<style lang="scss">
* {
}
</style>
