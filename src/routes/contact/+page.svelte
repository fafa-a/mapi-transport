<script>
  export const prerender = true
  import { css } from 'styled-system/css'
  import Input from '$lib/components/Input.svelte'
  import Textarea from '$lib/components/Textarea.svelte'
  import Button from '$lib/components/Button.svelte'
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import { toast } from '@zerodevx/svelte-toast'
</script>

<h2
  class={css({
    fontFamily: 'montserrat',
    fontSize: '3xl',
    textTransform: 'uppercase',
    color: 'black',
    py: '1.5rem',
    textAlign: 'center'
  })}
>
  Contact
</h2>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  use:enhance={({ formElement, formData, action }) => {
    return async ({ result, update }) => {
      if (result.type === 'success') {
        goto('/')
        toast.push('Message envoyé !')
      }
    }
  }}
  class={css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  })}
>
  <input type="hidden" name="form-name" value="contact" />
  <Input
    label="Nom"
    type="text"
    name="name"
    required="true"
    minlength="2"
    max="2"
  />
  <Input label="Prénom" type="text" name="firstname" minlength="2" max="2" />
  <Input label="Email" type="email" name="email" required="true" />
  <Textarea
    label="Message"
    name="message"
    required="true"
    minlength="15"
    max="1000"
  />
  <Button type="submit" text="Envoyer" />
</form>
