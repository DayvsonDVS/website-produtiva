<template>
  <div class="differential">

    <div class="differential__wrapper">
      <h1 class="differential__wrapper-title">NOSSO DIFERENCIAL</h1>


      <p class="differential__wrapper-text">
        Nossa estrutura é adequada para atender aos colaboradores de sua empresa.
        Contamos com amplas instalações, onde realizamos exames clínicos e complementares.
      </p>
    </div>

    <div class="differential__items">
      <PortraitDifferential v-for="{ img, description, content } in listDifferential" :description="description">

        <template v-slot:img>
          <img :src="img" />
        </template>

        <template v-slot:content>
          <p>{{ content }}</p>
        </template>

      </PortraitDifferential>
    </div>
  </div>
</template>
 
<script setup lang="ts">
const listDifferential = [
  {
    img: '_nuxt/assets/icons/doctor.svg',
    description: "Assessoria Médica",
    content: 'Nossos médicos estão disponíveis para prestar assessoria.'
  },
  {
    img: '_nuxt/assets/icons/estetoscopio.svg',
    description: "Atendimento In Loco",
    content: 'Levamos nossa estrutura para sua empresa para realização dos exames.'
  },
  {
    img: '_nuxt/assets/icons/esocial.svg',
    description: "eSocial",
    content: 'Possuímos um software adequado ao eSocial.'
  },
  {
    img: '_nuxt/assets/icons/provider.svg',
    description: "Prestadores em um só local",
    content: 'Todos os exames são realizados em um único local.'
  }
]

</script>
 
<style scoped lang="scss">
.differential {
  height: max-content;
  background: #fff;
  border-radius: 28px;
  padding: 1rem 2rem 2.5rem;
  position: relative;
  top: -40px;
  z-index: 6;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 2rem;
  box-shadow: 0 17px 41px rgb(74, 221, 164, 20%);

  .differential__wrapper {
    color: #385A4E;

    .differential__wrapper-title {
      font-size: 32px;
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      gap: 0.6rem;

      &::after {
        content: '';
        width: 108px;
        height: 2px;
        background: #05A16C;
      }
    }

    .differential__wrapper-text {
      width: 580px;
      font-size: 15px;
    }
  }

  .differential__items {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.5rem;
  }
}
</style>