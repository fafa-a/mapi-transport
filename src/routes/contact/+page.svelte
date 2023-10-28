<script lang="ts">
  import { css } from 'styled-system/css'
  import Input from '$lib/components/Input.svelte'
  import Textarea from '$lib/components/Textarea.svelte'
  import Button from '$lib/components/Button.svelte'
  import { goto } from '$app/navigation'
  import { toast } from '@zerodevx/svelte-toast'
  import emailjs from '@emailjs/browser'
  import MediaQuery from 'svelte-media-queries'
  import { Pulse } from 'svelte-loading-spinners'
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  let pending = false
  const handleSubmit = async ({ target }) => {
    pending = true
    const { name, firstname, email, message } = Object.fromEntries(
      target.elements
    )
    const templateParams = {
      from_name: `${firstname} ${name}`,
      to_name: 'Shirley',
      message,
      reply_to: email
    }

    const emailSend = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    )
    const { status, text } = emailSend
    if (status === 200) {
      goto('/')
      toast.push('Votre message a bien été envoyé !', {
        theme: {
          '--toastBackground': '#4caf50',
          '--toastProgressBackground': '#81c784'
        }
      })
      return { success: true }
    } else {
      throw error(status, text)
    }
    pending = false
  }
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
<MediaQuery
  query={[
    '(max-width: 768px)',
    '(min-width: 768px) and (max-width: 1280px)',
    '(min-width: 1280px)'
  ]}
  let:matches
>
  {@const [mobile, tablet, desktop] = matches}

  <form
    name="contact"
    id="contact"
    class={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      width: mobile ? '90%' : '70%',
      maxWidth: '1000px'
    })}
    on:submit|preventDefault={handleSubmit}
  >
    <div
      class={css({
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        gap: '1rem',
        width: '100%'
      })}
    >
      <Input
        label="Nom"
        type="text"
        name="name"
        required="true"
        minlength="2"
        max="2"
        width={mobile ? '100%' : '50%'}
      />
      <Input
        label="Prénom"
        type="text"
        name="firstname"
        minlength="2"
        max="2"
        width={mobile ? '100%' : '50%'}
      />
    </div>
    <Input
      label="Email"
      type="email"
      name="email"
      required="true"
      width="100%"
    />
    <Textarea
      label="Message"
      name="message"
      required="true"
      minlength="15"
      max="1000"
    />
    {#if pending}
      <div
        class={css({
          rounded: 'md',
          borderWidth: '2px',
          borderColor: 'black',
          p: '0.5rem 1.0rem'
        })}
      >
        <Pulse size="60" color="#40074f" unit="px" duration="1s" />
      </div>
    {:else}
      <Button type="submit" text="Envoyer" width="96px" />
    {/if}
  </form>
</MediaQuery>
