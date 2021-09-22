<template>
  <section class="wrapper our-platform">
    <div class="our-platform__text-wrapper">
      <div class="mb-8 mb-md-0">
        <h2 class="header-24 header-lg-40-2 fw-bold mb-7">Nasza platforma pozwala na różne aktywności, wspomagające <span
          class="underline-image">ratowanie&nbsp;planety:</span></h2>
        <div class="our-platform__device-mobile-wrapper">
          <img class="our-platform__device-map" :src="`${$config._app.basePath}images/device_map.jpg`" alt="">
        </div>

        <h3 class="header-20 header-lg-24 fw-bold mt-6 mt-md-8 mb-4 mb-md-5">Wyszukiwanie miejsc</h3>

        <p class="body-16-2 mb-7">Wyszukaj swoje ulubione miejsce i zobacz jakie rozwiązania eco lub nie eco dostrzegli w nim inni
          użytkownicy
          oraz sprawdź podstawowe informacje na jego temat.
        </p>

        <div class="d-flex">
          <div class="our-platform__lines-wrapper">
            <div class="our-platform__line"></div>

            <div class="our-platform__line"></div>

            <div class="our-platform__line"></div>
          </div>

          <div class="our-platform__arrow-tips-wrapper">
            <svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.383 1 1 5M5.383 9 1 5" stroke="#A3A5A4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.383 1 1 5M5.383 9 1 5" stroke="#A3A5A4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="mt-2 mt-md-0">
        <p class="body-12">
          To tylko niektóre z funkcjonalności, które przygotwaliśmy, aby uczynić naszą planetę lepszym miejscem dla nas
          wszystkich - sprawdź resztę sam na <a class="btn btn-link body-12" href="http://app.cityecoview.com">app.cityecoview.com</a>
        </p>
      </div>
    </div>

    <div class="our-platform__device-desktop-wrapper">
      <img class="our-platform__device-map" :src="`${$config._app.basePath}images/device_map.jpg`" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "OurPlatform",
}
</script>

<style lang="scss">
@import "./../assets/variables";

.our-platform {
  margin-top: 5.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 7.8125rem;
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 50%;
  }

  .underline-image {
    &::after {
      background-image: url("#{$assetPath}/images/saving_the_planet_line.jpg");
      height: 0.875rem;
      transform: translate(-50%, 90%);
    }
  }

  &__device-mobile-wrapper {
    position: relative;
    width: 100%;
    height: 22.125rem;
    background-color: $cardin-5;
    @media(min-width: 768px) {
      display: none;
    }
  }

  &__device-map {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8.125rem;
    border-radius: 1.25rem;
    @media (min-width: 768px) {
      width: 16.25rem;
    }
  }

  &__lines-wrapper {
    display: flex;
    align-items: center;
    height: 0.625rem;
    margin-right: 2rem;
  }

  &__line {
    width: 2.5rem;
    height: 0.0625rem;
    background-color: $cardin-10;
    margin-right: 0.5rem;

    @media(min-width: 768px) {
      margin-right: 1.5rem;
    }
  }

  &__arrow-tips-wrapper {
    display: flex;
    width: 2.5625rem;
    justify-content: space-between;

    svg:last-child {
      transform: rotate(180deg);
    }

    @media(min-width: 768px) {
      display: none;
    }
  }

  &__device-desktop-wrapper {
    display: none;
    position: relative;
    flex-basis: 50%;
    background-color: $cardin-5;

    @media(min-width: 768px) {
      display: block;
      margin-left: 3rem;
      height: 45rem;
    }
  }
}
</style>
