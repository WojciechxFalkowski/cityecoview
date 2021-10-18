<template>
  <section class="wrapper user-steps">
    <h2 class="user-steps__header header-24 header-lg-40-2">
      <span class="underline-image">Eko&nbsp;zmiana</span> wokół Ciebie w trzech krokach
    </h2>
      <div class="row w-100">
        <div class="col-12 col-md-4 mb-7 user-step">
          <span class="user-step__index header-20 body-lg-32 text-info">01.</span>
          <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">Pobierz aplikację</h3>

          <p class="body-16-2">Złap telefon i ściągnij aplikację <a class="btn btn-link"
                                           href="http://app.cityecoview.com">CityEcoView</a></p>
        </div>

        <div class="col-12 col-md-4 mb-7 user-step">
          <span class="user-step__index header-20 body-lg-32 text-info">02.</span>
          <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">Znajdż miejsce</h3>

          <p class="body-16-2">Sprawdź co piszą o miejscach które znasz lub dodaj je do eko mapy.</p>
        </div>

        <div class="col-12 col-md-4 mb-7 user-step">
          <span class="user-step__index header-20 body-lg-32 text-info">03.</span>
          <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">Uratuj planetę</h3>

          <p class="body-16-2">Miej oko na eko. Podziel się tym co myślisz.</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style lang="scss">
.user-steps {
  margin-top: 2.5rem;
  @media(min-width: 992px) {
    margin-top: 11rem;
  }

  &__header {
    max-width: 45.1875rem;
    margin-bottom: 3rem;
    font-weight: bold;

    @media (min-width: 768px) {
      margin-bottom: 6.9375rem;
    }
  }

  //&__elements {
  //  @media (min-width: 768px) {
  //    display: flex;
  //  }
  //}

  .underline-image {
    &::after {
      background-image: url("#{$assetPath}/images/three_steps_line.jpg");

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/three_steps_line-desktop.jpg");
        height: 1.0625rem;
        transform: translate(-50%, 0);
      }
    }
  }
}

.user-step {
  & p {
    @media (min-width: 992px) {
      max-width: 16rem;
    }
  }

  //margin-bottom: 3rem;

  //@media (min-width: 768px) {
  //  max-width: 22.75rem;
  //  margin-right: 1.4375rem;
  //}

  //&__index {
  //  display: block;
  //  margin-bottom: 2.5rem;
  //  @media(min-width: 992px) {
  //    margin-bottom: 5rem;
  //  }
  //}
}
</style>
