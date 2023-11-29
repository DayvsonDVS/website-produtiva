<template>
  <div class="portrait-differential">
    <slot class="portrait-differential-img" name="img" />

    <span class="portrait-differential-description">{{ description }}</span>

    <slot class="portrait-differential-content" name="content" />

    <GateButton title="Saiba mais">
      <img src="@/images/icons/full-arrow-right.svg">
    </GateButton>
  </div>
</template>
 
<script setup lang="ts">
interface Props {
  description: string
}

defineProps<Props>()
</script>
 
<style scoped lang="scss">
.portrait-differential {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  text-align: left;
  padding: 1rem;

  //icons
  :nth-child(1) {
    width: 39px;
    height: 39px;
  }

  .portrait-differential-description {
    color: #4ADDA4;
    font-size: 22px;
  }

  //description
  :nth-child(3) {
    width: 180px;
    height: 80px;
    font-size: 13px;
  }

  .gate-button {
    background: #4ADDA4;
    border-radius: 12px;
    font-size: 13px;
    padding: 0.5rem;
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    gap: 1rem;
    align-items: center;

    &:hover {
      box-shadow: 0px 7px 20px rgb(74, 221, 164, 37%);
    }

    :deep(span) {
      width: max-content;
      height: max-content;
    }
  }

}
</style>