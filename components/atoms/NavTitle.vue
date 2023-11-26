<template>
  <div class="nav-title">
    <NuxtLink :href="src">{{ title }}</NuxtLink>
  </div>
</template>
 
<script setup lang="ts">

interface Props {
  title: string
  src: string
}

defineProps<Props>()

</script>

<style scoped lang="scss">
.nav-title {
  color: #EBFFF7;
  cursor: pointer;
  width: max-content;

  a {
    display: grid;
    grid-auto-flow: row;
    gap: 0.2rem;
    font-size: 18px;

    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 12px;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
}
</style>
 