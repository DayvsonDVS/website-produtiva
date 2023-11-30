<template>
  <div class="services">

    <div class="services__wrapper">
      <h1 class="services__wrapper-title">NOSSOS SERVIÇOS</h1>

      <p class="services__wrapper-text">
        Sob coordenação de profissionais especializados e experientes, realizamos os procedimentos que sua empresa precisa
        para atender à legislação e manter a sua equipe de colaboradores trabalhando de acordo com padrões adequados, na
        área de Medicina, Higiene e Segurança do trabalho.
      </p>
    </div>

    <div class="services__items">
      <CardServices v-for="{ img, description, content } in listServices" :description="description">

        <template v-slot:img>
          <img :src="img" />
        </template>

        <template v-slot:content>
          <p>{{ content }}</p>
        </template>

      </CardServices>
    </div>

    <GateButton title="Confira todos os serviços">
      <img src="../../assets/icons/full-arrow-right.svg">

    </GateButton>
  </div>
</template>
 
<script setup lang="ts">
const listServices = [
  {
    img: '_nuxt/assets/icons/aso.svg',
    description: "ASO",
    content: 'Atestado de Saúde Ocupacional',

  },
  {
    img: '_nuxt/assets/icons/pcmso.svg',
    description: "PCMSO",
    content: 'Programa de Controle Médico de Saúde Ocupacional',

  },
  {
    img: '_nuxt/assets/icons/pgr.svg',
    description: "PGR",
    content: 'Programa de Gerenciamento de Riscos',

  },
  {
    img: '_nuxt/assets/icons/ltcat.svg',
    description: "LTCAT",
    content: 'Laudo técnico de condições ambientais do trabalho',

  },
  {
    img: '_nuxt/assets/icons/pca.svg',
    description: "PCA",
    content: 'Programa de Conservação Auditiva',

  }
]

</script>
 
<style scoped lang="scss">
.services {
  height: max-content;
  width: max-content;
  padding: 1rem 0rem 2.5rem 0rem;
  position: relative;
  top: -100px;
  z-index: 6;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 5rem;

  .services__wrapper {
    color: #385A4E;

    .services__wrapper-title {
      font-size: 32px;
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      gap: 0.6rem;
      background-color: transparent;

      &::after {
        content: '';
        width: 108px;
        height: 2px;
        background: #05A16C;
      }
    }

    .services__wrapper-text {
      width: 680px;
      font-size: 15px;
    }
  }

  .services__items {
    display: flex;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
  }

  .gate-button {
    background: #4ADDA4;
    padding: 0.5rem;
    border-radius: 12px;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    font-size: 13px;

    &:hover {
      box-shadow: 0px 7px 20px rgb(74, 221, 164, 37%);
    }
  }
}
</style>