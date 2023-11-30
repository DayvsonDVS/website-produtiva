<template>
  <div class="card-services">
    <slot class="card-services-img" name="img" />

    <span class="card-services-description">{{ description }}</span>

    <slot class="card-services-content" name="content" />
  </div>
</template>
 
<script setup lang="ts">
interface Props {
  description: string
}

defineProps<Props>()
</script>
 
<style scoped lang="scss">
.card-services {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 350px;
  padding: 1rem 1.2rem 2rem;
  border: solid 1px #DBF8ED;
  border-radius: 28px;
  align-items: center;
  background: #fff;

  //icons
  :nth-child(1) {
    width: 39px;
    height: 39px;
  }

  .card-services-description {
    color: #4ADDA4;
    font-size: 22px;
  }

  //description
  :nth-child(3) {
    width: 180px;
    font-size: 13px;
  }

}
</style>