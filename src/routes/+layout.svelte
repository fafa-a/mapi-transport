<script>
  import '../app.css';
  import { css } from 'styled-system/css';
  import IconMenuMobile from '$lib/components/IconMenuMobile.svelte';
  const title = 'mapi transport';
  let open = false;
</script>

<header
  class={css({
    width: '100vw',
    height: '3.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })}
>
  <h1
    class={css({
      fontSize: '2xl',
      textTransform: 'uppercase',
      backgroundColor: 'white',
      width: 'max-content',
      height: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      display: 'grid',
      placeItems: 'center'
    })}
  >
    {title}
  </h1>
  <button
    on:click={() => (open = !open)}
    class={css({ marginRight: '2.0rem', height: '100%' })}
  >
    <IconMenuMobile width="2.5rem" height="100%" color="white" />
  </button>
  <!-- <ul> -->
  <!--   <li><a href="/">Home</a></li> -->
  <!--   <li><a href="/about">About</a></li> -->
  <!-- </ul> -->
</header>
<slot />
