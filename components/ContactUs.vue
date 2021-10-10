<template>
  <section class="wrapper contact-us">
    <div class="row w-100">
      <div class="contact-us__questions-wrapper col-12 col-md-6">
        <h2 class="fw-bold header-24 header-lg-40-2 mb-5">
          <span class="underline-image">Masz&nbsp;pytania?</span> Skontaktuj się z&nbsp;nami:
        </h2>

        <a class="btn btn-link mb-6 header-md-24" href="mailto:info@cityecoview.com">
          info@cityecoview.com
        </a>

        <div class="contact-us__line"></div>

        <div>
          <a class="btn btn-link text-dark me-4 me-md-2 me-lg-4"
             href="https://www.facebook.com/cityeco.view.1"
             target="_blank">
            Facebook
          </a>


          <a class="btn btn-link text-dark me-4 me-md-2 me-lg-4"
             href="https://www.instagram.com/cityecoview/"
             target="_blank">
            Instagram
          </a>

          <a class="btn btn-link text-dark" href="https://twitter.com/CityEcoView1" target="_blank">
            Twitter
          </a>
        </div>
      </div>
      <div class="contact-us__newsletter-wrapper col-12 col-md-6">
        <NewsletterForm/>
      </div>
      <!--    <div class="contact-us__newsletter-wrapper">-->
      <!--      <h2 class="fw-bold header-24 header-lg-40-2 mb-5">-->
      <!--        Chcesz być na bieżąco? <span class="underline-image">Zapisz&nbsp;się</span> do newslettera-->
      <!--      </h2>-->

      <!--      <form action="">-->
      <!--        <div class="form-floating mb-4">-->
      <!--          <input type="email" class="form-control border-top-0 border-start-0 border-end-0" id="floatingInput"-->
      <!--                 placeholder="Twój adres e-mail">-->
      <!--          <label class="contact-us__floating-label" for="floatingInput">Twój adres e-mail</label>-->
      <!--        </div>-->

      <!--        <button class="btn btn-primary contact-us__submit-btn" type="submit">-->
      <!--          Zapisz się-->
      <!--        </button>-->
      <!--      </form>-->
      <!--    </div>-->
    </div>
  </section>
</template>

<script>
import NewsletterForm from "~/components/NewsletterForm.vue";

export default {
  name: "ContactUs",
  components: {
    NewsletterForm
  }
}
</script>

<style lang="scss">
@import "./../assets/variables";

.contact-us {
  margin-bottom: 13.6875rem;

  &__questions-wrapper {
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 0.0625rem solid $cardin-10;

    @media(min-width: 768px) {
      display: flex;
      padding-left: 0.65625rem;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      padding-right: 4rem;
      padding-bottom: unset;
      margin-bottom: unset;
      border-bottom: unset;
    }

    & .underline-image {
      &::after {
        background-image: url("#{$assetPath}/images/newsletter_question_line.jpg");
        height: 0.875rem;

        @media (min-width: 992px) {
          background-image: url("#{$assetPath}/images/newsletter_question_line-desktop.jpg");
          transform: translate(-50%, 40%);
        }
      }
    }

    & a[target="_blank"] {
      font-size: 0.75rem;
      line-height: 1.25rem;

      @include media-breakpoint-up(md) {
        font-size: 1rem;
        line-height: 1.625rem;
      }

      &:hover {

        opacity: 0.5;
      }
    }
  }

  &__line {
    width: 4rem;
    height: 0.0625rem;
    background-color: $cardin-10;
    margin-bottom: 2.5rem;
  }

  &__newsletter-wrapper {
    @media (min-width: 768px) {
      //flex-basis: 29.375rem;
      border-left: 0.0625rem solid $cardin-10;
      padding-left: 5.25rem;
    }
  }

}

</style>
