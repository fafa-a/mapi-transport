<script lang="ts">
  import { css } from 'styled-system/css'
  export let label: string
  export let type: string
  export let name: string
  export let required: boolean = false
  export let minlength: number
  export let pattern: string
  export let width: string = '100%'
</script>

<label
  class={css({
    display: 'flex',
    fontWeight: 'bold',
    color: 'neutral.900',
    width: width,
    height: '2.5rem'
  })}
  ><span class={css({ minWidth: '4rem' })}>{label}</span>
  <input
    class={css({
      rounded: 'md',
      borderWidth: '2px',
      borderColor: 'neutral.400',
      width: '100%'
    })}
    {type}
    {name}
    {required}
    {minlength}
    {pattern}
  />
</label>
