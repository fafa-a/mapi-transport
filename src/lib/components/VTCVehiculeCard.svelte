<script lang="ts">
  import type { VehiculeCard } from '$lib/stores/mapi'
  import { css } from 'styled-system/css'
  import { hstack } from '../../../styled-system/patterns'
  import IconPerson from './icon/IconPerson.svelte'
  import useAssets, { getImageUrl } from '$lib/helpers/hooks'
  export let vehicule: VehiculeCard
  const { type, number_passager, reservation_required, price_minimum } =
    vehicule
  const image = getImageUrl(`vehicules/${type}-mobile`)
  console.log(image)
</script>

<div
  class={css({
    width: '100%',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'gray.800',
    gap: '1rem',
    mb: '1rem',
    borderWidth: '1px',
    rounded: 'md',
    boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.75)',
    fontFamily: 'montserrat',
    padding: '1.5rem 1.0rem'
  })}
>
  <div class={css({ height: '3rem' })}>
    <div
      class={hstack({
        justifyContent: 'space-between',
        textTransform: 'capitalize'
      })}
    >
      <p>{type}</p>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        })}
      >
        <p>{number_passager}</p>
        <IconPerson width="1.1rem" height="1.1rem" />
      </div>
    </div>

    {#if reservation_required}
      <p>Sur reservation</p>
    {/if}
  </div>
  <img
    class={css({
      width: '100%',
      height: '60%',
      objectFit: 'contain',
      transform: 'scale(1.1)'
    })}
    src={`https://res.cloudinary.com/fafa/image/upload/v1695669234/mapi/vehicules/${type}.webp`}
    alt={type}
  />
  <div class={hstack({ justifyContent: 'space-around' })}>
    <p>À partir de {price_minimum} €</p>
    <a
      class={css({
        height: '100%',
        backgroundColor: 'neutral.500',
        color: 'white',
        fontSize: 'lg',
        padding: '0.2rem 2.0rem',
        textTransform: 'capitalize',
        display: 'grid',
        placeItems: 'center',
        rounded: 'lg',
        fontFamily: 'nunito',
        boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.75)'
      })}
      href="/reservation"
    >
      Réserver
    </a>
  </div>
</div>
