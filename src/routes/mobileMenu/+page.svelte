<script>
  import { css } from 'styled-system/css'
</script>

<ul
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
      filter: 'blur(5px)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundposition: 'center center'
    },
    width: '100vw',
    height: '100vh',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
>
  <li class={css({ color: 'white', fontSize: '2xl', marginBottom: '1.0rem' })}>
    <a href="/services">Services</a>
  </li>
  <li class={css({ color: 'white', fontSize: '2xl', marginBottom: '1.0rem' })}>
    <a href="/reservation">Réservation</a>
  </li>
  <li class={css({ color: 'white', fontSize: '2xl', marginBottom: '1.0rem' })}>
    <a href="/contact">Contact</a>
  </li>
</ul>
