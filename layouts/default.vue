<template>
  <div class="layout">
    <div class="layout__header">
      <Container>
        <Header />
      </Container>
    </div>


    <div class="layout__main">
      <slot />
    </div>

    <div class="layout__footer">
      <div class="layout__footer-wrapper">
        <div class="layout__footer-wrapper-receptive">
          <Logo />

          <p class="layout__footer-wrapper-receptive-text">
            Estamos de portas abertas para sua visita. Entre em contato que teremos a maior satisfação de atendê-lo.
          </p>
        </div>

        <div class="layout__footer-wrapper-information">
          <div class="layout__footer-wrapper-nav-bar">
            <span class="layout__footer-wrapper-nav-bar-title">Empresa</span>

            <NuxtLink href="/">Sobre</NuxtLink>
            <NuxtLink href="/">Serviços</NuxtLink>
            <NuxtLink href="/">Estrutura</NuxtLink>
            <NuxtLink href="/">Clientes</NuxtLink>
          </div>

          <div class="layout__footer-wrapper-address-contact">
            <span class="layout__footer-wrapper-address-contact-title">Endereço & Contato</span>

            <div class="layout__footer-wrapper-address-contact-map">
              <img src="_nuxt/assets/icons/map.svg">
              <span>Rua das Ninfas, 325, Boa Vista <br> Recife, Pernambuco</span>
            </div>

            <div class="layout__footer-wrapper-address-contact-phone">
              <img src="_nuxt/assets/icons/phone.svg">
              <span>+55 (81) 3216 - 4000</span>
            </div>

            <div class="layout__footer-wrapper-address-contact-email">
              <img src="_nuxt/assets/icons/email.svg">

              <div class="layout__footer-wrapper-address-contact-emails">
                <span>produtiva@produtiva.srv.br</span>
                <span>comercial@produtiva.srv.br</span>
              </div>
            </div>
          </div>

          <div class="layout__footer-wrapper-social">
            <span class="layout__footer-wrapper-social-title">Social</span>
            <div class="layout__footer-wrapper-social-icon">
              <img src="_nuxt/assets/icons/instagram.svg" alt="Instagram">
              <img src="_nuxt/assets/icons/facebook.svg" alt="Facebook">
            </div>
          </div>
        </div>
      </div>

      <div class="layout__footer-copyright">
        <p>Produtiva ©{{ copyright.getFullYear() }} todos os direitos reservados.</p>
        <p>Termos & Condições · Política de Privacidade</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const copyright = new Date()

</script>

<style scoped lang="scss">
.layout {
  .layout__header {
    background: linear-gradient(to right, #05a171 0%, #00d18a 100%);
  }

  .layout__footer {
    padding: 4rem 4rem 2.5rem;
    color: #EBFFF7;
    height: 477px;
    background: linear-gradient(to right, #05A16C 0%, #00A970 100%);

    .layout__footer-wrapper {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      justify-content: space-between;

      .layout__footer-wrapper-receptive {
        max-width: 400px;
        display: grid;
        align-content: center;

        .layout__footer-wrapper-receptive-text {
          padding: 60px 0px 180px;
        }
      }

      .layout__footer-wrapper-information {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        gap: 5rem;

        .layout__footer-wrapper-nav-bar {
          display: grid;
          align-content: flex-start;
          gap: 1.8rem;

          a {
            cursor: pointer;
            text-decoration: none;

            &:visited {
              color: #EBFFF7;
            }

            &:hover {
              color: aqua;
            }
          }

          .layout__footer-wrapper-nav-bar-title {
            color: #64CFB6;
          }
        }

        .layout__footer-wrapper-address-contact {
          display: grid;
          align-content: flex-start;
          gap: 1.8rem;

          .layout__footer-wrapper-address-contact-map {
            display: grid;
            grid-auto-flow: column;
            justify-content: left;
            gap: 1rem;
            align-items: center;
            line-height: 22px;
          }

          .layout__footer-wrapper-address-contact-title {
            color: #64CFB6;
          }

          .layout__footer-wrapper-address-contact-phone {
            display: grid;
            grid-auto-flow: column;
            justify-content: left;
            gap: 1rem;
          }

          .layout__footer-wrapper-address-contact-email {
            display: grid;
            grid-auto-flow: column;
            justify-content: left;
            gap: 1rem;
            align-items: center;

            .layout__footer-wrapper-address-contact-emails {
              display: grid;
              grid-auto-flow: row;
            }
          }
        }

        .layout__footer-wrapper-social {
          display: grid;
          grid-auto-flow: row;
          align-content: flex-start;
          justify-items: center;
          gap: 1rem;
        }

        .layout__footer-wrapper-social-title {
          color: #64CFB6;
        }
      }
    }

    .layout__footer-copyright {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      color: #64CFB6;
      justify-content: space-between;

    }
  }
}
</style>
