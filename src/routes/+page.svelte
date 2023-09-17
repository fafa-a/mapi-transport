<script lang="ts">
  import { css } from 'styled-system/css'
  const sentence = 'Service de taxi sur : '
  const cities = ['Toulouse', 'Marseille', 'Aix en Provence']
</script>

<div
  class={css({
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100vw',
      height: '100vh',
      backgroundImage:
        "url('$lib/assets/images/arthur-chauvineau-mobile.webp')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      '@media (min-width: 768px)': {
        backgroundImage:
          "url('$lib/assets/images/arthur-chauvineau-tablet.webp')"
      },

      '@media (min-width: 1280px)': {
        backgroundImage:
          "url('$lib/assets/images/arthur-chauvineau-desktop.webp')"
      }
    },
    width: '100%',
    height: 'calc(100vh - 3.5rem)'
  })}
>
  <div
    class={css({
      position: 'relative',
      top: '3.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    })}
  >
    <h2 class={css({ color: 'white', fontSize: '3xl' })}>
      {sentence}
      {#each cities as city}
        <br />{city}
      {/each}
    </h2>
    <div
      class={css({
        width: '100%',
        height: '4rem',
        backdropFilter: 'blur(10px)'
      })}
    />
  </div>
</div>
