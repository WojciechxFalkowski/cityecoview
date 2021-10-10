<template>
  <section class="wrapper user-steps">
    <h2 class="user-steps__header header-24 header-lg-40-2">
      <span class="underline-image">Trzy&nbsp;kroki</span> - tyle potrzeba, aby nasza planeta stała się dla nas
      wszystkich
      lepszym miejscem do życia
    </h2>
    <div class="user-steps__elements">
      <div class="user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">01.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold">Pobierz aplikację</h3>

        <p class="body-16-2">Wejdź na <a class="btn btn-link" href="http://app.cityecoview.com">app.cityecoview.com</a>
          i pobierz naszą aplikację na swój telefon.</p>
      </div>

      <div class="user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">02.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold">Znajdż miejsce</h3>

        <p class="body-16-2">Odszukaj miejsce, w którym występuje rozwiązanie eco lub wręcz przeciwne.</p>
      </div>

      <div class="user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">03.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold">Uratuj planetę</h3>

        <p class="body-16-2">Wystaw opinię na temat wybranego miejsca i uruchom proces ratowania planety.</p>
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

  &__elements {
    @media (min-width: 768px) {
      display: flex;
    }
  }

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
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    max-width: 22.75rem;
    margin-right: 1.4375rem;
  }

  &__index {
    display: block;
    margin-bottom: 2.5rem;
    @media(min-width: 992px) {
      margin-bottom: 5rem;
    }
  }
}
</style>
