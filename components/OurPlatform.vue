<template>
  <section class="wrapper our-platform">
    <div class="our-platform__text-wrapper">
      <div>
        <h2 class="header-24 header-lg-40-2 fw-bold mb-7">
          {{ activeSlideDescription.title }}
          <span :class="$i18n.locale === 'pl'?'underline-image':'underline-image-en'"
                v-html="activeSlideDescription.textUnderlined">
          </span>
        </h2>

        <div class="our-platform__device-mobile-wrapper">
          <div id="carouselMobileIndicators" class="carousel slide h-100" data-bs-ride="carousel" data-bs-touch="true">
            <div class="carousel-inner h-100">
              <div v-for="(slide,index) of slides" class="carousel-item h-100"
                   :class="index===activeSlideIndex?'active':''">
                <div class="h-100 position-relative d-flex">
                  <img alt="phone skeleton image" class="our-platform__mobile-image"
                       :src="`${$config._app.basePath}images/${slide.phoneSkeletonUrl}`"
                       :alt="slides.smallDescription">
                  <video muted="muted" class="our-platform__mobile-video m-auto" autoplay>
                    <source class="h-100" :src="`${$config._app.basePath}videos/${slide.imgUrl}`" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="our-platform__small-title header-20 header-lg-24 fw-bold mt-6 mt-md-8 mb-4 mb-md-5">
          {{ activeSlideDescription.smallTitle }}
        </h3>

        <p class="our-platform__small-description body-16-2">
          {{ activeSlideDescription.smallDescription }}
        </p>

        <div class="d-flex mb-8">
          <div ref="linesWrapper" class="our-platform__lines-wrapper">
            <div v-for="(slide,index) of slides" class="our-platform__line"
                 :style="{animationDuration: `${slide.time}s`}"
                 :class="index===activeSlideIndex?'active':''"
                 data-bs-target="#carouselDesktopIndicators"
                 role="progressbar"
                 :data-bs-slide-to="index" :aria-label="slide.smallDescription">
            </div>
          </div>

          <div class="our-platform__arrow-tips-wrapper">
            <svg @click="showPreviousSlide" type="button"
                 data-bs-slide="prev" width="6" height="10"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M5.383 1 1 5M5.383 9 1 5" stroke="#A3A5A4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg @click="showNextSlide" type="button" data-bs-slide="next"
                 width="6" height="10"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1.38269 9L5.76534 4.99987" stroke="#181E1B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.38269 1.00013L5.76534 5" stroke="#181E1B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div>

        <p class="body-12 mt-2 mt-md-0 mb-0">{{ $t('our_platform.small_description.text') }}
          <a class="btn btn-link body-12"
             :href="$t('our_platform.small_description.link')">{{ $t('our_platform.small_description.link') }}</a>
        </p>
      </div>
    </div>

    <div class="our-platform__device-desktop-wrapper">
      <div id="carouselDesktopIndicators" class="carousel slide h-100" data-bs-ride="carousel">
        <div class="carousel-inner h-100">
          <div ref="slidersWrapperRef" v-for="(slide,index) of slides" class="carousel-item h-100"
               :class="index===activeSlideIndex?'active':''">
            <div class="h-100 position-relative d-flex justify-content-center">
              <img :src="`${$config._app.basePath}images/${slide.phoneSkeletonUrl}`"
                   class="our-platform__desktop-image" alt="phone skeleton">
              <video muted="muted" :src="`${$config._app.basePath}videos/${slide.imgUrl}`"
                     class="our-platform__desktop-video m-auto" controls>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurPlatform",
  data() {
    return {
      mobile_carousel: null,
      desktop_carousel: null,
      CAROUSEL_CONFIG: {
        interval: 0,
        pause: false,
        wrap: true,
        touch: true,
      },
      interval: null,
      activeSlideIndex: 0,
      slides: [
        {
          title: this.$t('our_platform.slides.first_slide.title'),
          textUnderlined: this.$t('our_platform.slides.first_slide.text_underlined'),
          smallTitle: this.$t('our_platform.slides.first_slide.small_title'),
          smallDescription: this.$t('our_platform.slides.first_slide.small_description'),
          imgUrl: 'carousel_mobile_1.mp4',
          time: 11,
          phoneSkeletonUrl: 'phone_skeleton.jpg',
        },
        {
          title: this.$t('our_platform.slides.second_slide.title'),
          textUnderlined: this.$t('our_platform.slides.second_slide.text_underlined'),
          smallTitle: this.$t('our_platform.slides.second_slide.small_title'),
          smallDescription: this.$t('our_platform.slides.second_slide.small_description'),
          imgUrl: 'carousel_mobile_2.mp4',
          time: 24,
          phoneSkeletonUrl: 'phone_skeleton.jpg',
        },
        {
          title: this.$t('our_platform.slides.third_slide.title'),
          textUnderlined: this.$t('our_platform.slides.third_slide.text_underlined'),
          smallTitle: this.$t('our_platform.slides.third_slide.small_title'),
          smallDescription: this.$t('our_platform.slides.third_slide.small_description'),
          imgUrl: 'carousel_mobile_3.mp4',
          time: 39,
          phoneSkeletonUrl: 'phone_skeleton.jpg',
        },
      ]
    }
  },
  computed: {
    activeSlideDescription() {
      return this.slides[this.activeSlideIndex]
    }
  },
  async created() {
    // console.log('created');
    // console.log(await this.$strapi.find('tests'))
    // try {
    //   await this.$strapi.find('restaurants');
    // } catch (error) {
    //   console.error(error);
    // }
  },
  mounted() {
    const mobileCarousel = document.querySelector('#carouselMobileIndicators');
    this.mobile_carousel = new bootstrap.Carousel(mobileCarousel, this.CAROUSEL_CONFIG)

    mobileCarousel.addEventListener('slide.bs.carousel', (el) => {
      this.activeSlideIndex = el.to;
    });

    const desktopCarouselElement = document.querySelector('#carouselDesktopIndicators');
    this.desktop_carousel = new bootstrap.Carousel(desktopCarouselElement, this.CAROUSEL_CONFIG)

    desktopCarouselElement.addEventListener('slide.bs.carousel', (el) => {
      this.activeSlideIndex = el.to;
      clearInterval(this.interval);
      const activeSlide = this.$refs.slidersWrapperRef.find(slide => slide.classList.contains('active'));

      if (activeSlide) {

        const previousVideo = activeSlide.querySelector('video');
        previousVideo.currentTime = 0;
        previousVideo.pause();

        setTimeout(() => {
          const activeSlide = this.$refs.slidersWrapperRef.find(slide => slide.classList.contains('active'));

          if (activeSlide) {
            const activeVideo = activeSlide.querySelector('video');
            activeVideo.play();
            this.interval = setInterval(() => {
              this.showNextSlide();
            }, this.slides[this.activeSlideIndex].time * 1000)
          }

        }, 500)
      }
    });

    const activeSlide = this.$refs.slidersWrapperRef.find(slide => slide.classList.contains('active'));
    activeSlide.querySelector('video').play();
    this.interval = setInterval(() => {
      this.showNextSlide();
    }, this.slides[0].time * 1000)
  },
  methods: {
    showPreviousSlide() {
      this.mobile_carousel.prev()
      this.desktop_carousel.prev()
    },
    showNextSlide() {
      this.mobile_carousel.next()
      this.desktop_carousel.next()
    }
  }
}
</script>

<style lang="scss">
@import "./../assets/variables";

.our-platform {
  margin-top: 2.5rem;
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
      transform: translate(-50%, 75%);

      @media (min-width: 992px) {
        width: 105%;
        background-image: url("#{$assetPath}/images/saving_the_planet_line-desktop.jpg");
        height: 1.4375rem;
      }
    }
  }

  .underline-image-en {
    &::after {
      background-image: url("#{$assetPath}/images/saving_the_planet_line.jpg");
      height: 0.875rem;
      transform: translate(-50%, 75%);

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/saving_the_planet_line_en-desktop.jpg");
        height: 1.4375rem;
        transform: translate(-50%, 60%);
      }
    }
  }

  .carousel-item {
    & img {
      border-radius: 1rem;
    }
  }

  &__device-mobile-wrapper {
    position: relative;
    width: 100%;
    height: 22.125rem;
    @media(min-width: 768px) {
      display: none;
    }

    .carousel-item {
      background-color: $cardin-5;
    }

  }

  &__mobile-image {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 95%;
    z-index: 1;
  }

  &__mobile-video {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
  }

  &__desktop-image {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 85%;
    z-index: 1;

    @include media-breakpoint-up(lg) {
      height: 95%;
    }
  }

  &__desktop-video {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;

    @include media-breakpoint-up(lg) {
      height: 90%;
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

  &__small-title {
    min-height: 3.75rem;
    @media (min-width: 360px) {
      min-height: 1.875rem;
    }
  }

  &__small-description {
    min-height: 6.5rem;
    @media (min-width: 360px) {
      min-height: 8.125rem;
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
    height: .0625rem;
    margin-right: 0.5rem;
    background: linear-gradient(to left, $cardin-10 50%, $turquoise 50%) right;
    background-size: 200%;

    @media(min-width: 768px) {
      margin-right: 1.5rem;
    }

    &.active {
      background-color: $turquoise;
      background-position: left;
      animation-name: loading-right;
      //animation-duration: 10s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    @keyframes loading-right {
      from {
        background-position: right;
      }

      to {
        background-position: left;
      }
    }
  }

  &__arrow-tips-wrapper {
    display: flex;
    width: 2.5625rem;
    justify-content: space-between;

    @include media-breakpoint-up(md) {
      width: 4.5rem;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      transform: translateY(-6px);

      &:hover {
        @include media-breakpoint-up(lg) {
          opacity: 0.4;
        }
      }

      & path {
        transform: translate(7px, 6px);
      }
    }

    path {
      stroke: $cardin-100;
    }

    svg:last-child {
      //transform: rotate(180deg) translateY(50%);
    }

    @media(min-width: 768px) {
      //display: none;
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

  & video::-webkit-media-controls {
    display: none;
  }
}
</style>
