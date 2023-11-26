<template>
  <div class="gate-button">
    <span>{{ title }}</span>
    <slot />
  </div>
</template>
 
<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>
 
<style scoped lang="scss">
.gate-button {
  color: #EBFFF7;
  font-size: 18px;
  cursor: pointer;
}
</style>