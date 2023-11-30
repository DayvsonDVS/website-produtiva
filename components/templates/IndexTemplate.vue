<template>
  <div class="index-template">
    <section class="index-template__header">
      <Container>
        <Presentation />
      </Container>
    </section>

    <section class="index-template__body">
      <Container>
        <Differential />

        <div class="index-template__body-blur1" />
        <Services />

        <div class="index-template__body-blur2" />
        <div class="index-template__body-blur3" />

        <div class="index-template__body-exam-results">
          <ExamResults />

          <div class="index-template__body-blur4" />
        </div>

        <Customers />
      </Container>
    </section>

  </div>
</template>
 
<script setup lang="ts">

</script>

<style scoped lang="scss">
.index-template {
  .index-template__header {
    background: linear-gradient(to right, #05a171 0%, #00d18a 100%);
    height: 555px;
  }

  .index-template__body {
    background: #fff;
    height: max-content;

    .index-template__body-blur1 {
      position: relative;
      width: 333px;
      height: 167px;
      border-radius: 50%;
      background: #4ADDA4;
      filter: blur(15px);
      opacity: 15%;
      float: right;
      bottom: 160px;
      box-shadow: -161px 77px 99px rgb(74, 221, 164, 50%);
      left: 12px;
    }

    .index-template__body-blur2 {
      position: relative;
      width: 333px;
      height: 167px;
      border-radius: 50%;
      background: #4ADDA4;
      filter: blur(15px);
      opacity: 15%;
      float: right;
      right: 80px;
      bottom: 460px;
      box-shadow: -161px 77px 99px rgb(74, 221, 164, 50%);
    }

    .index-template__body-blur3 {
      position: relative;
      width: 333px;
      height: 167px;
      border-radius: 50%;
      background: #4ADDA4;
      filter: blur(15px);
      opacity: 15%;
      float: left;
      left: 110px;
      bottom: 370px;
      box-shadow: -161px 77px 99px rgb(74, 221, 164, 50%);
    }

    .index-template__body-exam-results {
      display: grid;
      justify-content: center;

      .index-template__body-blur4 {
        position: relative;
        width: 333px;
        height: 167px;
        border-radius: 50%;
        background: #4ADDA4;
        filter: blur(15px);
        opacity: 15%;
        float: left;
        left: 110px;
        bottom: 70px;
        box-shadow: -161px 77px 99px rgb(74, 221, 164, 50%);
      }
    }
  }
}
</style>