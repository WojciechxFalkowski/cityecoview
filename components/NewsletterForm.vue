<template>
  <div class="newsletter-form">
    <h2 class="fw-bold header-24 header-lg-40-2 mb-5">
      Chcesz być na bieżąco? <span class="underline-image">Zapisz&nbsp;się</span> do newslettera!
    </h2>

    <form @submit.pr.prevent="sendMessage">
      <div class="form-floating mb-5">
        <input v-model="email" type="email" class="form-control border-top-0 border-start-0 border-end-0"
               id="floatingInput"
               placeholder="Twój adres e-mail" name="email">
        <label class="newsletter-form__floating-label" for="floatingInput">Twój adres e-mail</label>

        <div v-if="emailErrorMessages.length>0" v-for="emailErrorMessage of emailErrorMessages"
             class="newsletter-form__error-message">
          {{ emailErrorMessage }}
        </div>
      </div>

      <button class="btn btn-primary newsletter-form__submit-btn" type="submit">
        Zapisz się
      </button>

      <div v-if="isEmailSent" class="newsletter-form__message-sent">
        Dziękujemy za zapisanie się do newslettera!
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsletterForm",
  data() {
    return {
      email: "",
      emailErrorMessages: [],
      isEmailSent: false,
    }
  },
  methods: {
    isValidEmail(email) {
      const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexp.test(email);
    },

    resetMessages() {
      this.emailErrorMessages = [];
      this.isEmailSent = false;
    },

    sendMessage() {
      this.resetMessages();

      if (this.email.length <= 0) {
        this.emailErrorMessages.push("Proszę podać adres email.");
        return;
      }

      if (!this.isValidEmail(this.email)) {
        this.emailErrorMessages.push("Proszę podać poprawny adres email.");
        return;
      }
      fetch('https://formspree.io/f/xjvpbrrk', {
        method: 'POST',
        body: JSON.stringify({email: this.email}),
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(res => res.json())
        .then((res) => {
          this.isEmailSent = res.ok;
        })
        .catch(error => {
          this.emailErrorMessages.push("Ups! Wystąpił problem z przesłaniem formularza");
          console.error(error)
          // this.emailErrorMessage.push("Oops! There was a problem submitting your form")
        });
    }
  }
}
</script>

<style lang="scss">
@import "./../assets/variables";

.newsletter-form {
  & .underline-image {
    &::after {
      background-image: url("#{$assetPath}/images/newsletter_line.jpg");
      height: 0.875rem;

      @media (min-width: 992px) {
        background-image: url("#{$assetPath}/images/newsletter_line-desktop.jpg");
        transform: translate(-50%, 40%);
      }
    }
  }

  &__floating-label {
    color: $cardin-40;
    line-height: 1.625rem;
    font-size: 1.25rem;
  }

  input[type="email"] {
    font-size: 1.25rem;
  }

  //label, .form-floating > .form-control {
  //  padding-left: unset;
  //}

  &__error-message {
    color: $red;
  }

  &__submit-btn {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  &__message-sent {
    margin-top: 1rem;
    color: $green;
  }
}
</style>
