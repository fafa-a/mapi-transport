<script lang="ts">
  import { css } from 'styled-system/css'
  export let label: string
  export let name: string
  export let required: boolean = false
  export let minlength: number
  export let max: number
</script>

<label
  class={css({
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    color: 'neutral.900',
    width: '100%'
  })}
>
  <span class={css({ mb: '0.5rem' })}>{label}</span>
  <textarea
    class={css({
      rounded: 'md',
      borderWidth: '2px',
      borderColor: 'neutral.400'
    })}
    rows="5"
    {name}
    {required}
    {minlength}
    {max}
  />
</label>
