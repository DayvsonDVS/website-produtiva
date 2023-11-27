<template>
  <div class="presentation">
    <div class="presentation__wrapper">
      <div class="presentation__wrapper--text">

        <div class="presentation__wrapper--text-introduction">
          <h1>Bem-Vindo(a)!</h1>
          <p>
            Esta é a Produtiva, uma empresa que está no mercado há 24 anos, atuando na área de Medicina e Segurança do
            Trabalho, cuidando da saúde e segurança ocupacional dos colaboradores de mais de 500 empresas, através de uma
            equipe capacitada e experiente.
          </p>
        </div>


        <div class="presentation__wrapper--text-icon">
          <img id="heart" src="@/images/icons/heart.svg">
          <img id="helmet" src="@/images/icons/helmet.svg">
        </div>
      </div>

      <div class="presentation__wrapper--image">
        <img id="engineer" src="@/images/person/engineer.svg">
        <img id="doctor" src="@/images/person/doctor.svg">
        <img id="master-builder" src="@/images/person/masterBuilder.svg">
        <img id="shield" src="@/images/icons/shield.svg">
        <div class="presentation__wrapper--image-circle">
          <div class="presentation__wrapper--image--circle-shadow" />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">

</script>
 
<style scoped lang="scss">
.presentation {
  height: 550px;

  .presentation__wrapper {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 4rem;
    overflow: hidden;
    height: 100%;

    .presentation__wrapper--text {
      color: #EBFFF7;
      margin-left: 105px;
      display: grid;
      gap: 6rem;
      max-width: 360px;
      height: 100%;

      .presentation__wrapper--text-introduction {
        h1 {
          margin-top: 5rem;
          padding: 1rem 0rem;
        }
      }

      .presentation__wrapper--text-icon {
        justify-self: center;

        #helmet {
          width: 145px;
          position: relative;
          bottom: 340px;
          left: 40px;
        }

        #heart {
          position: relative;
          width: 73px;
          bottom: 270px;
        }
      }

    }

    .presentation__wrapper--image {
      overflow: hidden;
      margin-top: -90px;
      height: max-content;

      .presentation__wrapper--image-circle {
        position: relative;
        z-index: 2;
        right: 195px;
        z-index: 1;
        width: 539px;
        height: 539px;
        background: #fff;
        bottom: 465px;
        border-radius: 50%;
        left: 102px;

        .presentation__wrapper--image--circle-shadow {
          position: relative;
          width: 339px;
          height: 339px;
          background: rgb(37, 45, 42);
          opacity: 10%;
          border-radius: 90%;
          top: 100px;
          left: 100px;
          box-shadow: 0 0 80px rgba(0, 0, 0, 0.8);
          filter: blur(10px);
          z-index: 1;

        }
      }

      #engineer {
        position: relative;
        width: 366px;
        z-index: 3;
      }

      #doctor {
        position: relative;
        right: 205px;
        z-index: 5;
        width: 420px;
      }

      #master-builder {
        position: relative;
        right: 475px;
        z-index: 4;
        width: 426px;
      }

      #shield {
        position: relative;
        bottom: 400px;
        right: 630px;
        width: 73px;
      }
    }
  }
}
</style>