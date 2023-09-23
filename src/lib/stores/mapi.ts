export const SOCIETY_NAME = 'mapi transport'
export const SENTENCE = 'Service de taxi sur : '
export const CITIES = ['Toulouse', 'Marseille', 'Aix en Provence']
export const PHONE_NUMBER = '+33766642277'

const TypeOfVehicule = {
  BERLINE: 'berline',
  VAN: 'van',
  MINI_BUS: 'mini-bus'
} as const

export type VehiculeCard = {
  type: (typeof TypeOfVehicule)[keyof typeof TypeOfVehicule]
  number_passager: number
  number_baggage?: number
  reservation_required?: boolean
  price_minimum: number
}

export const VTC_VEHICULES: VehiculeCard[] = [
  {
    type: TypeOfVehicule.BERLINE,
    number_passager: 4,
    price_minimum: 20
  },
  {
    type: TypeOfVehicule.VAN,
    number_passager: 7,
    price_minimum: 50,
    reservation_required: true
  },
  {
    type: TypeOfVehicule.MINI_BUS,
    number_passager: 13,
    price_minimum: 50,
    reservation_required: true
  }
]
