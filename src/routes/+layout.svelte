<script lang="ts">
  import '../app.css'
  import '../styles/font.css'
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { css } from 'styled-system/css'
  import IconMenuMobile from '$lib/components/icon/IconMenuMobile.svelte'
  import IconMenuMobileClose from '$lib/components/icon/IconMenuMobileClose.svelte'
  import MediaQuery from 'svelte-media-queries'
  import { SOCIETY_NAME } from '$lib/stores/mapi'
  let open = false
  const toggleMobileMenu = () => {
    open = !open
  }
  const resetMobileMenu = () => {
    open = false
  }
</script>

<header
  class={css({
    width: '100vw',
    height: '3.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000
  })}
>
  <h1
    class={css({
      fontSize: '2xl',
      fontFamily: 'montserrat',
      fontWeight: 600,
      textTransform: 'uppercase',
      backgroundColor: 'white',
      width: 'max-content',
      height: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      display: 'grid',
      placeItems: 'center',

      '@media (min-width: 768px)': {
        marginLeft: '2.5rem'
      },
      '@media (min-width: 1280px)': {
        marginLeft: '5.0rem'
      }
    })}
  >
    <a href="/" on:click={resetMobileMenu}>{SOCIETY_NAME}</a>
  </h1>
  <MediaQuery
    query={[
      '(max-width: 768px)',
      '(min-width: 768px) and (max-width: 1280px)',
      '(min-width: 1280px)'
    ]}
    let:matches
  >
    {@const [mobile, tablet, desktop] = matches}
    {#if mobile}
      {#if !open}
        <a
          href="/mobileMenu"
          on:click={toggleMobileMenu}
          class={css({ marginRight: '2.0rem', height: '100%' })}
        >
          <IconMenuMobile
            class={css({
              width: '2.5rem',
              height: '100%',
              color: 'slate.300',
              _hover: { color: 'slate.400' }
            })}
          />
        </a>
      {:else}
        <a
          href="/"
          on:click={toggleMobileMenu}
          class={css({ marginRight: '2.0rem', height: '100%' })}
          ><IconMenuMobileClose
            class={css({
              width: '2.5rem',
              height: '100%',
              color: 'slate.300',
              _hover: { color: 'slate.400' }
            })}
          />
        </a>
      {/if}
    {/if}
    {#if tablet || desktop}
      <ul
        class={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: '16rem',
          color: 'white',
          marginRight: '2.5rem',

          '@media (min-width: 1280px)': {
            marginRight: '5.0rem'
          }
        })}
      >
        <li><a href="/services">Services</a></li>
        <li><a href="/reservation">Réservation</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    {/if}
  </MediaQuery>
</header>
<SvelteToast />
<div
  class={css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden',
    minHeight: 'calc(100vh - 7.5rem)'
  })}
>
  <slot />
</div>
{#if open}{:else}
  <footer
    class={css({
      width: '100vw',
      height: '7.5rem',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'start',
      backgroundColor: 'black',
      py: '1rem'
    })}
  >
    <ul
      class={css({
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
      })}
    >
      <li><a href="/services">Services</a></li>
      <li><a href="/reservation">Réservation</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <ul
      class={css({
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
      })}
    >
      <li><a href="/mentions">Mentions légales</a></li>
      <li>
        <a href="/agreement_service">Politique de confidentialité</a>
      </li>
    </ul>
  </footer>
{/if}
