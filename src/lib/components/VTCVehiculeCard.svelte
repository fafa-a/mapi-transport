<script lang="ts">
  import type { VehiculeCard } from '$lib/stores/mapi'

  export let vehicule: VehiculeCard
</script>

<div>
  <div>{vehicule.type}{vehicule.number_passager}{vehicule.number_baggage}</div>
  <div>{vehicule.reservation && vehicule.reservation}</div>
  <div>{vehicule.imageURL}</div>
  <div>{vehicule.price_minimum}</div>
</div>
