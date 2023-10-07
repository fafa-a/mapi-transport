<script lang="ts">
  import { css } from 'styled-system/css'
  export let type: string
  export let text: string
</script>

<button
  class={css({
    rounded: 'md',
    width: 'max-content',
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
