<script lang="ts">
  import { css } from 'styled-system/css'
</script>

<div
  class={css({
    backgroundImage: "url('$lib/assets/images/arthur-chauvineau-mobile.webp')",
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundposition: 'center center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,

    '@media (min-width: 768px)': {
      backgroundImage: "url('$lib/assets/images/arthur-chauvineau-tablet.webp')"
    },

    '@media (min-width: 1280px)': {
      backgroundImage:
        "url('$lib/assets/images/arthur-chauvineau-desktop.webp')"
    }
  })}
>
  Hello
</div>
