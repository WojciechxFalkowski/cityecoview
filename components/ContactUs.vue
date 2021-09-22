<template>
  <section class="wrapper contact-us">
    <div class="contact-us__questions-wrapper">
      <h2 class="fw-bold header-24 header-lg-40-2 mb-5">
        <span class="underline-image">Masz&nbsp;pytania?</span> Skontaktuj się z&nbsp;nami:
      </h2>

      <a class="btn btn-link mb-6" href="mailto:contact@cityecoview.com">
        contact@cityecoview.com
      </a>

      <div class="contact-us__line"></div>

      <div>
        <a class="btn btn-link text-dark me-4 body-12" href="https://www.facebook.com/cityeco.view.1" target="_blank">
          Facebook
        </a>


        <a class="btn btn-link text-dark me-4 body-12" href="https://www.instagram.com/cityecoview/" target="_blank">
          Instagram
        </a>

        <a class="btn btn-link text-dark body-12" href="https://twitter.com/CityEcoView1" target="_blank">
          Twitter
        </a>
      </div>
    </div>

    <div class="contact-us__newsletter-wrapper">
      <h2 class="fw-bold header-24 header-lg-40-2 mb-5">
        Chcesz być na bieżąco? <span class="underline-image">Zapisz&nbsp;się</span> do newslettera
      </h2>

      <form action="">
        <div class="form-floating mb-4">
          <input type="email" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput"
                 placeholder="Twój adres e-mail">
          <label class="contact-us__floating-label" for="floatingInput">Twój adres e-mail</label>
        </div>

        <button class="btn btn-primary contact-us__submit-btn" type="submit">
          Zapisz się
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style lang="scss">
@import "./../assets/variables";

.contact-us {
  margin-bottom: 13.6875rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  &__questions-wrapper {
    flex-basis: 23.25rem;
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 0.0625rem solid $cardin-10;

    @media(min-width: 768px) {
      padding-right: 4rem;
      padding-bottom: unset;
      margin-bottom: unset;
      border-bottom: unset;
    }

    .underline-image {
      &::after {
        background-image: url("#{$assetPath}/images/contact_us_line.jpg");
        height: 0.875rem;
      }
    }
  }

  & > div:first-child {

  }

  &__newsletter-wrapper {
    @media (min-width: 768px) {
      flex-basis: 29.375rem;
      border-left: 0.0625rem solid $cardin-10;
      padding-left: 5.25rem;
    }

    .underline-image {
      &::after {
        background-image: url("#{$assetPath}/images/newsletter_line.jpg");
        height: 0.875rem;
      }
    }
  }

  &__line {
    width: 4rem;
    height: 0.0625rem;
    background-color: $cardin-10;
    margin-bottom: 2.5rem;
  }

  &__floating-label {
    color: $cardin-40;
    line-height: 1.625rem;
  }

  &__submit-btn {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

</style>
