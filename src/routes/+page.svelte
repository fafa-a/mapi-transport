<script lang="ts">
  import { css } from 'styled-system/css'
  import IconPhone from '$lib/components/icon/IconPhone.svelte'
  import {
    SENTENCE,
    CITIES,
    PHONE_NUMBER,
    VTC_VEHICULES
  } from '$lib/stores/mapi'
  import VTCVehiculeCard from '$lib/components/VTCVehiculeCard.svelte'
  import { vstack } from 'styled-system/patterns'
</script>

<div
  class={css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden'
  })}
>
  <div
    class={css({
      width: '100vw',
      height: '100vh',
      backgroundImage:
        "url('$lib/assets/images/background/arthur-chauvineau-mobile.webp')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

      '@media (min-width: 768px)': {
        backgroundImage:
          "url('$lib/assets/images/background/arthur-chauvineau-tablet.webp')"
      },

      '@media (min-width: 1280px)': {
        backgroundImage:
          "url('$lib/assets/images/background/arthur-chauvineau-desktop.webp')"
      }
    })}
  />
  <div
    class={css({
      position: 'absolute',
      top: '3.5rem',
      left: 0,
      px: '1rem',
      width: '100%',
      height: 'calc(100vh - 3rem)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      fontFamily: 'nunito'
    })}
  >
    <h2 class={css({ color: 'white', fontSize: '3xl' })}>
      {SENTENCE}
      {#each CITIES as city}
        <br />{city}
      {/each}
    </h2>
    <div
      class={css({
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      })}
    >
      <a
        class={css({
          width: '4rem',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          backdropFilter: 'blur(30px)',
          rounded: 'lg'
        })}
        href={`tel:${PHONE_NUMBER}`}
      >
        <IconPhone width="2.5rem" height="2.5rem" color="white" />
      </a>
      <a
        class={css({
          height: '100%',
          color: 'white',
          fontSize: '2xl',
          textTransform: 'capitalize',
          padding: '0 2rem',
          display: 'grid',
          placeItems: 'center',
          backdropFilter: 'blur(30px)',
          rounded: 'lg',
          fontFamily: 'nunito'
        })}
        href="/reservation"
      >
        Réserver
      </a>
    </div>
  </div>
</div>
<div class={css({ width: '90vw', mx: 'auto', marginTop: '3.5rem' })}>
  <h2
    class={css({
      fontFamily: 'montserrat',
      fontSize: '3xl',
      textTransform: 'uppercase',
      color: 'black',
      py: '1.5rem',
      textAlign: 'center'
    })}
  >
    Tarifs
  </h2>
  <div
    class={css({
      display: 'flex',
      flexDirection: 'column',
      md: { flexDirection: 'row', gap: '1rem' }
    })}
  >
    {#each VTC_VEHICULES as vehicule}
      <VTCVehiculeCard {vehicule} />
    {/each}
  </div>
</div>
