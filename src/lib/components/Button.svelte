<script lang="ts">
  import { css } from 'styled-system/css'
  export let type: 'button' | 'submit' | 'reset'
  export let text: string
  export let width: string
</script>

<button
  class={css({
    rounded: 'md',
    width: width,
    color: 'white',
    backgroundColor: 'neutral.950',
    height: '2.5rem',
    px: '1rem',
    _hover: { backgroundColor: 'neutral.800' }
  })}
  {type}
>
  {text}
</button>
