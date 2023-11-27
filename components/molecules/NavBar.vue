<template>
  <div class="nav-bar">
    <div class="nav-bar__items">
      <NavTitle src="" title="Início" />
      <NavTitle src="" title="Sobre" />
      <NavTitle src="" title="Serviços" />
      <NavTitle src="" title="Estrutura" />
      <NavTitle src="" title="Contatos" />
    </div>

    <div class="nav-bar__gate-button">
      <GateButton title="Portal do cliente">
        <img src="@/images/icons/simple-arrow-right.svg">
      </GateButton>
    </div>
  </div>
</template>
 
<style scoped lang="scss">
.nav-bar {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-self: center;
  justify-self: center;
  gap: 3rem;

  .nav-bar__items {
    display: grid;
    grid-auto-flow: column;
    max-width: 500px;
    gap: 2rem;
    padding: 1.4rem;
  }

  .nav-bar__gate-button {
    .gate-button {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      align-items: center;
      background: #01AD74;
      padding: 1.4rem;
      border-radius: 28px;
    }
  }
}
</style>