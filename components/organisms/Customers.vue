<template>
  <div class="customers">
    <div class="customers__wrapper">
      <Topic title="CLIENTES">
        <p>
          A Produtiva vem deixando sua contribuição na área de
          Medicina e Segurança Ocupacional, em empresas como:
        </p>
      </Topic>

      <div class="customers__wrapper-logo-container">
        <div ref="gateButtonPrev" class="customers__wrapper-container-gate-prev">
          <GateButton>
            <img src="_nuxt/assets/icons/full-arrow-right.svg">
          </GateButton>
        </div>

        <div class="customers__wrapper-logo-container-slider" ref="slider">
          <img src="_nuxt/assets/imgs/customers/shoppingGuararapes.svg" alt="Shopping Guararapes" />
          <img src="_nuxt/assets/imgs/customers/atlantico.svg" alt="Pizzaria Atlântico" />
          <img src="_nuxt/assets/imgs/customers/moradaDaPaz.svg" alt="Morada da Paz" />
          <img src="_nuxt/assets/imgs/customers/extrabom.svg" alt="Extra Bom" />
          <img src="_nuxt/assets/imgs/customers/bandeirantes.svg" alt="Bandeirantes" />
          <img src="_nuxt/assets/imgs/customers/universal.svg" alt="Universal" />
        </div>

        <div ref="gateButtonNext" class="customers__wrapper-container-gate-next">
          <GateButton>
            <img src="_nuxt/assets/icons/full-arrow-right.svg">
          </GateButton>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">
// const slider = ref<HTMLElement>()
// const gateButtonNext = ref<HTMLElement>()
// const gateButtonPrev = ref<HTMLElement>()

// let positionLogo = 0;

// onMounted(() => {
//   let auxCountSlide = slider.value!.children.length - 6;
//   let countSlide = auxCountSlide;

//   gateButtonNext.value?.addEventListener('click', () => {
//     nextSlide()
//   })

//   function nextSlide() {
//     if (countSlide === 0) {
//       positionLogo = 0
//       countSlide = auxCountSlide
//       resetSlider()
//     }
//     else {
//       console.log(countSlide)
//       countSlide--
//       updateSlider();
//     }
//   }

//   function updateSlider() {
//     positionLogo += 13.62;
//     console.log(slider.value!.style.transform = "translateX(" + (-positionLogo + "vw") + ")");
//   }

//   function resetSlider() {
//     slider.value!.style.transform = "translateX(" + (0 + "vw") + ")"
//   }
// })

</script>
 
<style scoped lang="scss">
.customers {
  margin-top: -60px;
  overflow: hidden;
  display: grid;
  justify-content: center;
  padding-bottom: 50px;

  .customers__wrapper {
    display: grid;
    justify-items: center;
    text-align: center;

    .topic {
      margin-bottom: 80px;

      p {
        width: 380px;
        font-size: 15px;
      }
    }

    .customers__wrapper-logo-container {
      display: grid;
      width: 100%;
      overflow: hidden;
      grid-template-columns: repeat(3, max-content);
      align-items: center;
      gap: 1rem;

      .customers__wrapper-container-gate-prev {
        .gate-button {
          margin: 1rem;
          background: #4ADDA4;
          width: max-content;
          padding: 0.6rem;
          border-radius: 8px;
          display: grid;
          z-index: 2;
          transform: rotate(180deg);

          &:hover {
            box-shadow: 0px -7px 20px rgba(74, 221, 164, 0.37);
          }

          img {
            width: 10px;
          }
        }

      }

      .customers__wrapper-logo-container-slider {
        transition: transform 0.5s ease-in-out;
        overflow: hidden;
        flex-direction: row-reverse;

        img {
          width: 176px;
          height: auto;
          object-fit: cover;
        }
      }

      .customers__wrapper-container-gate-next {
        .gate-button {
          margin: 1rem;
          background: #4ADDA4;
          width: max-content;
          padding: 0.6rem;
          border-radius: 8px;
          display: grid;
          z-index: 2;

          &:hover {
            box-shadow: 0px 7px 20px rgba(74, 221, 164, 0.37);
          }

          img {
            width: 10px;
          }
        }

      }
    }
  }
}
</style>