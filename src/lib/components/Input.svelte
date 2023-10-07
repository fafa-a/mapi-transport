<script lang="ts">
  import { css } from 'styled-system/css'
  export let label: string
  export let type: string
  export let name: string
  export let required: boolean = false
  export let minlength: number
  export let pattern: string
</script>

<label
  class={css({
    display: 'flex',
    fontWeight: 'bold',
    color: 'neutral.900',
    width: '100%',
    height: '2.5rem'
  })}
  ><span class={css({ minWidth: '4rem' })}>{label}</span>
  <input
    class={css({
      rounded: 'md',
      borderWidth: '2px',
      borderColor: 'neutral.400'
    })}
    {type}
    {name}
    {required}
    {minlength}
    {pattern}
  />
</label>
