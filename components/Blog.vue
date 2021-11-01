<template>
  <section class="wrapper blog">
    <h2 class="header-24 header-lg-40-2 fw-bold mb-4">
      {{ $t('blog.title_first_line') }}
      <br v-if="$i18n.locale === 'en'"/>
      {{ $t('blog.title_continuation') }}

      <span
        :class="$i18n.locale === 'pl'?'underline-image':'underline-image-en'"
        v-html="$t('blog.text_underlined')"></span>
    </h2>

    <swiper class="d-lg-none" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(slide,index) of slides" :key="index">
        <img :src="`${$config._app.basePath}images/${slide.imgUrl}`" :alt="slide.description">
        <p class="p-3 fw-bold mb-0">{{ slide.description }}</p>
      </swiper-slide>

      <swiper-slide class="d-flex justify-content-center align-items-center h-auto">
        <div class="blog__article-discover-more-description">
          <h3 class="header-24 text-center fw-bold mb-md-5">{{ $t('blog.discover_more.title') }}</h3>
          <p class="text-center">{{ $t('blog.discover_more.description') }}
            <a class="d-block"
               :href="$t('blog.discover_more.link')">{{
                $t('blog.discover_more.decorated_description')
              }}</a>
          </p>
        </div>
      </swiper-slide>
    </swiper>

    <div class="blog__articles">
      <!--LEFT IMG-->
      <div class="blog__article-left">
        <img class="w-100" :src="`${$config._app.basePath}images/${slides[0].imgUrlDesktop}`"
             :alt="slides[0].description">
        <h3 class="header-40-2 bg-black text-white w-100 p-5 mb-0">{{ slides[0].description }}</h3>
      </div>

      <!--RIGHT IMAGES-->
      <div class="blog__article-right">
        <!--TOP IMAGE-->
        <div class="blog__article-top">
          <img :src="`${$config._app.basePath}images/${slides[1].imgUrlDesktop}`"
               :alt="slides[1].description">
          <h3 class="header-20 header-xxl-24 w-50 mb-0 fw-bold">{{ slides[1].description }}</h3>
        </div>

        <!--BOTTOM IMAGE-->
        <div class="d-flex mt-4">
          <div class="blog__article-bottom">
            <img :src="`${$config._app.basePath}images/${slides[2].imgUrlDesktop}`"
                 :alt="slides[2].description">
            <h3 class="header-20 header-xxl-24 mb-0 p-3 p-xxl-4 fw-bold">{{ slides[2].description }}</h3>
          </div>

          <div class="blog__article-discover-more">
            <div class="blog__article-discover-more-description">
              <h4 class="header-24 text-center fw-bold mb-2">{{ $t('blog.discover_more.title') }}</h4>
              <p class="text-center">{{ $t('blog.discover_more.description') }}
                <a class="d-block" :href="$t('blog.discover_more.link')">{{
                    $t('blog.discover_more.decorated_description')
                  }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "Blog",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      slides: [
        {
          imgUrl: 'blog_img_1.jpg',
          imgUrlDesktop: 'blog_img_1-desktop.jpg',
          description: this.$t('blog.slides[0].description')
        },
        {
          imgUrl: 'blog_img_1.jpg',
          imgUrlDesktop: 'blog_img_2-desktop.jpg',
          description: this.$t('blog.slides[1].description')
        },
        {
          imgUrl: 'blog_img_1.jpg',
          imgUrlDesktop: 'blog_img_3-desktop.jpg',
          description: this.$t('blog.slides[2].description')
        }
      ],
      image: null
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }
}
</script>

<style lang="scss">
@import "./../assets/variables";

.blog {

  & > h2 {
    max-width: 49.875rem;
  }

  .underline-image {
    &::after {
      background-image: url("#{$assetPath}/images/blog_line.jpg");
      transform: translate(-50%, 40%);

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/blog_line-desktop.jpg");
        height: 1.4375rem;
        transform: translate(-50%, 55%);
      }
    }
  }

  .underline-image-en {
    &::after {
      background-image: url("#{$assetPath}/images/blog_line_en.jpg");
      transform: translate(-50%, 55%);
      height: 1.4375rem;

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/blog_line_en-desktop.jpg");
      }
    }
  }

  .swiper-slide {
    width: 220px;
  }

  .swiper-slide:nth-child(2n) {
    width: 220px;
  }

  .swiper-slide:nth-child(3n) {
    width: 220px;
  }

  &__articles {
    display: none;

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }

  &__article-left {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;

    h3 {
      height: 100%;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  &__article-right {
    flex-basis: 50%;
    margin-left: 1.5rem;

  }

  &__article-top {
    display: flex;
    align-items: center;

    img {
      flex-basis: 50%;
      width: 100%;
      margin-right: 1.5rem;
    }

    h3 {
      max-width: 13.0625rem;
    }
  }

  &__article-bottom {
    flex-basis: 50%;
  }

  &__article-discover-more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    margin-left: 1.5rem;
    background-color: $cardin-5;
  }

  &__article-discover-more-description {
    max-width: 10rem;

    p {
      line-height: 1.75rem;
    }
  }
}
</style>
