<template>
  <div class="index-template">
    <section class="index-template__header">
      <Container>
        <Header />

        <Presentation />
      </Container>

      <section class="index-template__body">
        <Container>
          <Differential />

          <Services />
        </Container>
      </section>

    </section>
  </div>
</template>
 

<script setup lang="ts">

</script>

<style scoped lang="scss">
.index-template__header {
  background: linear-gradient(to right, #05a171 0%, #00d18a 100%);
  height: 690px;

  .index-template__body {
    background: #fff;
    height: 1380px;
  }
}
</style>