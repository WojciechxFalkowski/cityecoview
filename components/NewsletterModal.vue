<template>
  <div ref="modalRef" class="modal fade newsletter-modal p-2" id="exampleModalCenter" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button @click="$emit('handleCloseModal')" type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <NewsletterForm/>
        </div>
        <!--        <div class="modal-footer">-->
        <!--          <button type="button" class="btn btn-primary">Zapisz się</button>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import NewsletterForm from "~/components/NewsletterForm.vue";

export default {
  name: "NewsletterModal",
  components: {
    NewsletterForm
  }
}
</script>

<style lang="scss">
@import "./../assets/variables";

.newsletter-modal {

  & .modal-dialog {
    @include media-breakpoint-up(lg) {
      max-width: 49.5rem;
    }
  }

  & .modal-content {
    border-radius: 0.5rem;
    @include media-breakpoint-up(lg) {
      flex-direction: row;
      min-height: 22.625rem;
    }
  }

  & .modal-header {
    padding: unset;
    height: 11.5625rem;
    background-image: url("#{$assetPath}/images/newsletter_image.jpg");
    background-repeat: no-repeat;
    border-bottom: unset;
    background-size: cover;
    background-position: 50% 50%;

    @include media-breakpoint-up(lg) {
      order: 2;
      width: 22.5rem;
      height: unset;
      background-image: url("#{$assetPath}/images/newsletter_image-desktop.jpg");
    }
  }

  & .underline-image {
    z-index: 1056;
  }

  & .modal-body {
    padding: 2rem;

    @include media-breakpoint-up(lg) {
      padding: 4rem;

      & h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;

        & .underline-image {
          &::after {
            background-image: url("#{$assetPath}/images/newsletter_line.jpg");
            transform: translate(-50%, 70%);
          }
        }
      }
    }
  }

  & [type=button].close {
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    border: unset;
    font-size: 2rem;
  }

  & [type=submit] {
    width: 8.875rem;
    padding: 0.6875rem 1.5rem;
  }
}
</style>
