import { error } from '@sveltejs/kit'
import type { Actions } from './$types'
import emailjs from '@emailjs/nodejs'
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const { name, firstname, email, message } = Object.fromEntries(data)
    const templateParams = {
      from_name: `${firstname} ${name}`,
      to_name: 'Shirley',
      message,
      reply_to: email
    }
    const serviceID = 'service_suog53n'
    const templateID = 'template_kwoxx3i'
    const keys = {
      publicKey: 'xmD8LKwBacT7lsRi2',
      privateKey: 'qBKIBfTjQ-CKusABTuFK6'
    }
    const emailSend = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      keys
    )
    const { status, text } = emailSend
    if (status === 200) {
      return { success: true }
    } else {
      throw error(status, text)
    }
  }
} satisfies Actions
