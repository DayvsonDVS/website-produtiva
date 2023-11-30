
<template>
  <div class="exam-results">
    <div class="exam-results__wrapper">
      <h1 class="exam-results__wrapper-title">
        Resultado dos Exames
      </h1>

      <p class="exam-results__wrapper-content">
        Confira o resultado do seu exame no site do Laboratório Adolfo Lutz que realiza exames laboratoriais e
        diagnósticos
        com a mais alta precisão e responsabilidade.
      </p>

      <GateButton title="Confira os seus exames">
        <fullArrowRight />
      </GateButton>
    </div>

    <div class="exam-results__img">
      <img src="../../assets/imgs/person/nurse.svg">
    </div>
  </div>
</template>
 
<script setup lang="ts">
import fullArrowRight from '@/assets/icons/full-arrow-right.svg'

</script>
 
<style scoped lang="scss">
.exam-results {
  width: 1100px;
  height: 320px;
  display: grid;
  gap: 8rem;
  background: linear-gradient(to right, #4ADDA4 0%, #39CC93 100%);
  color: #EBFFF7;
  padding-left: 2.4rem;
  border-radius: 38px;
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: space-between;
  margin-bottom: 10px;

  .exam-results__wrapper {
    display: grid;
    align-content: center;
    gap: 2rem;
    margin-top: -40px;

    .exam-results__wrapper-title {
      font-size: 48px;
      margin: 0;
    }

    .gate-button {
      margin-top: 10px;
      gap: 2rem;
      padding: 1rem;
      background: #EBFFF7;
      width: max-content;
      color: #48DBA2;
      border-radius: 22px;

      :deep(span) {
        padding-right: 1rem;
      }
    }
  }

  .exam-results__img {
    width: 455px;
    overflow: hidden;
    position: relative;
    bottom: 30px;
    right: 22px;
    border-bottom-right-radius: 38px;
    height: 350px;
    display: grid;
    align-items: center;
    padding-top: 12px;

    img {
      position: relative;
      bottom: 20px;
      width: 480px;
    }
  }

}
</style>