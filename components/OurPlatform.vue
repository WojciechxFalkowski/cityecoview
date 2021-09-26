<template>
  <section class="wrapper our-platform">
    <div class="our-platform__text-wrapper">
      <div>
        <h2 class="header-24 header-lg-40-2 fw-bold mb-7">
          {{ activeSlideDescription.title }}
          <span class="underline-image" v-html="activeSlideDescription.textUnderlined">
          </span>
        </h2>

        <div class="our-platform__device-mobile-wrapper">
          <!--          <img class="our-platform__device-map" :src="`${$config._app.basePath}images/device_map.jpg`" alt="">-->
          <div id="carouselMobileIndicators" class="carousel slide h-100" data-bs-ride="carousel" data-bs-touch="true">

            <div class="carousel-inner h-100">
              <div v-for="(slide,index) of slides" class="carousel-item h-100"
                   :class="index===activeSlideIndex?'active':''">
                <div class="h-100 position-relative">
                  <img class="our-platform__carousel-image" :src="`${$config._app.basePath}images/${slide.imgUrl}`"
                       alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="header-20 header-lg-24 fw-bold mt-6 mt-md-8 mb-4 mb-md-5">
          {{ activeSlideDescription.smallTitle }}
        </h3>

        <p class="body-16-2 mb-7">
          {{ activeSlideDescription.smallDescription }}
        </p>
      </div>

      <div>
        <div class="d-flex mb-8">
          <div ref="linesWrapper" class="our-platform__lines-wrapper">
            <div v-for="(slide,index) of slides" class="our-platform__line"
                 :class="index===activeSlideIndex?'active':''"
                 data-bs-target="#carouselDesktopIndicators"
                 :data-bs-slide-to="index" :aria-label="'Slide ' + index"></div>
          </div>

          <div class="our-platform__arrow-tips-wrapper">
            <svg type="button" data-bs-target="#carouselMobileIndicators" data-bs-slide="prev" width="6" height="10"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.383 1 1 5M5.383 9 1 5" stroke="#A3A5A4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg type="button" data-bs-target="#carouselMobileIndicators" data-bs-slide="next" width="6" height="10"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.383 1 1 5M5.383 9 1 5" stroke="#A3A5A4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <p class="body-12 mt-2 mt-md-0">
          To tylko niektóre z funkcjonalności, które przygotwaliśmy, aby uczynić naszą planetę lepszym miejscem dla nas
          wszystkich - sprawdź resztę sam na <a class="btn btn-link body-12" href="http://app.cityecoview.com">app.cityecoview.com</a>
        </p>
      </div>
    </div>

    <div class="our-platform__device-desktop-wrapper">
      <div id="carouselDesktopIndicators" class="carousel slide h-100" data-bs-ride="carousel">
        <div class="carousel-inner h-100">
          <div v-for="(slide,index) of slides" class="carousel-item h-100"
               :class="index===activeSlideIndex?'active':''">
            <div class="h-100 position-relative">
              <img :src="`${$config._app.basePath}images/${slide.imgUrl}`"
                   class="d-block position-absolute top-50 start-50 translate-middle" alt="...">
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
      CAROUSEL_CONFIG: {
        interval: 10000,
        pause: false,
        wrap: true
      },
      activeSlideIndex: 0,
      slides: [
        // {
        //   title: 'Nasza platforma poz',
        //   textUnderlined: 'ratowanie&nbsp;planety:',
        //   smallTitle: 'Wyszukiwanie miejsc',
        //   smallDescription: 'Wyszukaj swoje ulubione miejsce i zobacz jakie rozwiązania eco lub nie eco dostrzegli w nim inni użytkownicy oraz sprawdź podstawowe informacje na jego temat.',
        //   imgUrl: 'device_map.jpg',
        // },

        {
          title: 'Nasza platforma pozwala na różne aktywności, wspomagające',
          textUnderlined: 'ratowanie&nbsp;planety:',
          smallTitle: 'Wyszukiwanie miejsc',
          smallDescription: 'Wyszukaj swoje ulubione miejsce i zobacz jakie rozwiązania eco lub nie eco dostrzegli w nim inni użytkownicy oraz sprawdź podstawowe informacje na jego temat.',
          imgUrl: 'device_map.jpg',
        },
        {
          title: 'Nasza platforma pozwala na różne aktywności, wspomagające',
          textUnderlined: 'ratowanie&nbsp;planety:',
          smallTitle: 'Wyszukiwanie miejsc',
          smallDescription: 'Wyszukaj swoje ulubione miejsce i zobacz jakie rozwiązania eco lub nie eco dostrzegli w nim inni użytkownicy oraz sprawdź podstawowe informacje na jego temat.',
          imgUrl: 'device_map.jpg',
        },
        // {
        //   title: 'Nasza platforma pozwala na różne aktywności, wspomagające',
        //   textUnderlined: 'ratowanie&nbsp;planety:',
        //   smallTitle: 'Wyszukiwanie miejsc',
        //   smallDescription: 'Wyszukaj swoje ulubione miejsce i zobacz jakie rozwiązania eco lub nie eco dostrzegli w nim inni użytkownicy oraz sprawdź podstawowe informacje na jego temat.',
        //   imgUrl: 'hero_image.jpg',
        // }
      ]
    }
  },

  computed: {
    activeSlideDescription() {
      return this.slides[this.activeSlideIndex]
    }
  },
  mounted() {
    const mobileCarousel = document.querySelector('#carouselMobileIndicators');
    new bootstrap.Carousel(mobileCarousel, this.CAROUSEL_CONFIG)

    mobileCarousel.addEventListener('slide.bs.carousel', (el) => {
      this.activeSlideIndex = el.to;
    });

    const desktopCarouselElement = document.querySelector('#carouselDesktopIndicators');
    new bootstrap.Carousel(desktopCarouselElement, this.CAROUSEL_CONFIG)

    desktopCarouselElement.addEventListener('slide.bs.carousel', (el) => {
      this.activeSlideIndex = el.to;
    })
  }
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

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/saving_the_planet_line-desktop.jpg");
        height: 1.4375rem;
        transform: translate(-50%, 45%);
      }
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

  &__carousel-image {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 16rem;
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
      animation-duration: 10s;
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
