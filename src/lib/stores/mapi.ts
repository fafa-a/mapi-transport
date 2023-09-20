export const SOCIETY_NAME = 'mapi transport'
export const SENTENCE = 'Service de taxi sur : '
export const CITIES = ['Toulouse', 'Marseille', 'Aix en Provence']
export const PHONE_NUMBER = '+3376664227'

enum TypeOfVehicule {
  'BERLINE' = 'berline',
  'VAN' = 'van',
  'MINI_BUS' = 'mini-bus'
}

export type VehiculeCard = {
  type: TypeOfVehicule
  number_passager: number
  number_baggage: number
  reservation?: string | null
  imageURL: string
  price_minimum: number
}

export const VTC_VEHICULES: VehiculeCard[] = [
  {
    type: TypeOfVehicule.BERLINE,
    number_passager: 4,
    number_baggage: 4,
    imageURL: '',
    price_minimum: 20
  },
  {
    type: TypeOfVehicule.VAN,
    number_passager: 6,
    number_baggage: 6,
    imageURL: '',
    price_minimum: 50
  },
  {
    type: TypeOfVehicule.MINI_BUS,
    number_passager: 8,
    number_baggage: 8,
    imageURL: '',
    price_minimum: 50
  }
]
