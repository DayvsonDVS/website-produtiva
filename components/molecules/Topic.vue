<template>
  <div class="topic">
    <div class="topic__wrapper">
      <h1 class="topic__wrapper-title"> {{ title }}</h1>

      <slot />
    </div>
  </div>
</template>
 
<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>
 
<style scoped lang="scss">
.topic {
  .topic__wrapper {
    color: #385A4E;

    .topic__wrapper-title {
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
  }
}
</style>