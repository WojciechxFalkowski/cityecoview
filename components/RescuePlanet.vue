<template>
  <section class="wrapper rescue-planet">
    <div class="rescue-planet__description-wrapper">
      <h2 class="text-white header-24 header-lg-40-2">
        <span class="d-lg-none">Zacznij już dziś ratować planetę wraz ze społecznością, której również zależy.</span>
        <span class="d-none d-lg-block">Zacznij ratować planetę z ludźmi, którym zależy. </span>
      </h2>

      <a class="btn btn-primary mt-4" href="http://app.cityecoview.com">Ściągnij aplikację</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "RescuePlanet"
}
</script>

<style lang="scss">
@import "./../assets/variables";

.rescue-planet {
  position: relative;
  height: 23rem;
  background-image: url("#{$assetPath}/images/rescue_planet_people.jpg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  border-radius: 0.75rem;
  object-fit: scale-down;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-bottom: 11.25rem;
    height: 28rem;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    background-color: rgba(0, 0, 0, 0.45);

    @media (min-width: 768px) {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

  &__description-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 2rem;
    max-width: 39.1875rem;
    text-align: center;

    @media (min-width: 768px) {
      margin: 0 auto;
      padding: unset;
    }

    a {
      width: fit-content;
      margin: 0 auto;
      border-width: 0;

      &:hover {
        border-color: unset;
      }
    }
  }
}

</style>
