<template>
  <section class="wrapper user-steps">
    <h2 class="user-steps__header header-24 header-lg-40-2">
      <span :class="$i18n.locale === 'pl'?'underline-image':'underline-image-en'"
            v-html="$t('user_steps.title_underline')"></span>
      <span v-html="$t('user_steps.title')"></span>
    </h2>
    <div class="row w-100">
      <div class="col-12 col-md-4 mb-7 user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">01.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">{{ $t('user_steps.user_first_step.title') }}</h3>

        <p class="body-16-2">{{ $t('user_steps.user_first_step.beginning_description') }}<a class="btn btn-link"
                                                                                            :href="'https://'+$t('user_steps.user_first_step.link')">{{
            $t('user_steps.user_first_step.link')
          }}</a>
          {{ $t('user_steps.user_first_step.end_description') }}</p>
      </div>

      <div class="col-12 col-md-4 mb-7 user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">02.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">{{ $t('user_steps.user_second_step.title') }}</h3>

        <p class="body-16-2" v-html="$t('user_steps.user_second_step.description')"></p>
      </div>

      <div class="col-12 col-md-4 mb-7 user-step">
        <span class="user-step__index header-20 body-lg-32 text-info">03.</span>
        <h3 class="header-20 header-lg-24 mb-4 fw-bold mt-6 pt-xl-6">{{ $t('user_steps.user_third_step.title') }}</h3>

        <p class="body-16-2" v-html="$t('user_steps.user_third_step.description')"></p>
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
    max-width: 36rem;
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
      height: 1.0625rem;
      transform: translate(-50%, 75%);

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/three_steps_line-desktop.jpg");
        height: 1.0625rem;
        width: 105%;
        transform: translate(-50%, 25%);
      }
    }
  }

  .underline-image-en {
    &::after {
      background-image: url("#{$assetPath}/images/three_steps_line_en-desktop.jpg");
      transform: translate(-50%, 50%);
      height: 1.0625rem;

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/three_steps_line_en-desktop.jpg");
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
