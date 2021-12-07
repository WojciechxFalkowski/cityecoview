<template>
  <div class="cookies-privacy-policy">
    <span class="d-none d-lg-block"></span>
    <div class="d-flex flex-column align-items-baseline me-4 flex-lg-row align-items-lg-center">
      <p class="body-12 mb-lg-0 me-lg-4">
        {{ $t('cookies_privacy_policy.description') }}
      </p>

      <button @click="$emit('set-cookies')" class="btn btn-primary py-2 body-12">
        {{ $t('cookies_privacy_policy.accept_text') }}
      </button>

      <nuxt-link to="privacy-policy"
                 class="btn btn-primary py-2 mt-2 mt-lg-0 ms-lg-2 body-12 cookies-privacy-policy__link">
        {{ $t('cookies_privacy_policy.privacy_policy') }}
      </nuxt-link>
    </div>

    <div @click="$emit('close-cookie')" class="cookies-privacy-policy__exit-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M4.917,8.4H23.032a.546.546,0,1,0,0-1.087H4.917a.546.546,0,1,0,0,1.087Z"
              transform="translate(5.89 -5.22) rotate(45)"/>
        <path d="M.6,0H18.72a.576.576,0,0,1,.6.543.576.576,0,0,1-.6.543H.6A.576.576,0,0,1,0,.544.576.576,0,0,1,.6,0Z"
              transform="translate(17.433 3.769) rotate(135)"/>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: "CookiesPrivacyPolicy",
}
</script>

<style lang="scss">
@import "./../assets/variables";

.cookies-privacy-policy {
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 1.5rem;
  color: $white;
  background-color: $cookies-color;
  z-index: 1337;

  @media (min-width: 992px) {
    padding: 0.75rem 1.25rem;
  }

  & button:hover {
    border-color: $black;
  }

  &__exit-icon {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    & svg {
      width: 1.25rem;
      height: 1.25rem;
      fill: $white
    }
  }

  &__link {
    min-width: 11rem;
  }
}
</style>
