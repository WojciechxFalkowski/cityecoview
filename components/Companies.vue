<template>
  <div class="wrapper companies">
    <div class="companies__wrapper">
      <h3 class="header-20 text-white text-center mx-auto mb-6 mb-md-7 px-5">
        {{ $t('companies.beginning_title') }}
        <span
          :class="$i18n.locale === 'pl'?'underline-image':'underline-image-en'" v-html="$t('companies.text_underlined')">
        </span>
        {{ $t('companies.end_title') }}
      </h3>

      <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="d-flex justify-content-center" v-for="(slide,index) of slides"
                      :key="index">
          <img class="companies__img" :src="`${$config._app.basePath}images/${slide.imgUrl}`" :alt="slide.alt">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "Companies",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        // centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },

      },
      slides: [
        {
          alt: 'oxygen company logo',
          imgUrl: 'oxygen.svg'
        },
        {
          alt: 'youth business polad company logo',
          imgUrl: 'logo_youth_business_poland.svg'
        },
        {
          alt: 'prointegra company logo',
          imgUrl: 'logo_prointegra.svg'
        },
      ]
    }
  },
  mounted() {
    // this.swiper.slideTo(0, 1000, false);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper
    }
  },
}
</script>

<style lang="scss">
@import "./../assets/variables";

.companies {
  margin-top: 1.5rem;
  margin-bottom: 13.8125rem;

  @media(min-width: 768px) {
    margin-top: 10rem;
    margin-bottom: 12.25rem;
  }

  .swiper-container {
    @include media-breakpoint-up(md) {
      max-width: 39.25rem;
    }
  }

  .swiper-wrapper {
    align-items: center;
    margin-left: 2rem;
    margin-right: 2rem;

    @include media-breakpoint-up(md) {
      margin-left: unset;
      margin-right: unset;
    }
  }

  .swiper-slide {
    width: unset;
  }

  &__wrapper {
    background-color: $cardin-100;
    width: 100%;
    height: 15.6875rem;
    border-radius: 0.5rem;

    @include media-breakpoint-up(md) {
      height: 20rem;
    }

    h3 {
      padding-top: 2.0625rem;

      @media(min-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
        max-width: unset;
        padding-top: 5.5rem;
      }

      .underline-image {
        z-index: 100;

        &::after {
          background-image: url("#{$assetPath}/images/companies_line.svg");
          transform: translate(-50%, 75%);
          height: 1.4375rem;

          @media (min-width: 768px) {
            background-image: url("#{$assetPath}/images/companies-desktop_line.svg");
            height: 1.4375rem;
            transform: translate(-50%, 55%);
          }
        }
      }

      .underline-image-en {
        z-index: 100;

        &::after {
          width: 100%;
          background-image: url("#{$assetPath}/images/companies_line.svg");
          transform: translate(-50%, 60%) scaleY(0.6);
          height: 1.4375rem;

          @media (min-width: 768px) {
            width: 110%;
            background-image: url("#{$assetPath}/images/companies-line_en-desktop.svg");
            height: 1.4375rem;
            transform: translate(-50%, 55%);
          }
        }
      }
    }
  }
}

</style>
