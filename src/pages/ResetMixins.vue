<template>
  <section>
    <h2>Mixins</h2>
    <MixinCard v-for="n in 2" :key="n" />
  </section>
  <section class="mt-5">
    <h2>Composable</h2>
    <ComposableCard v-for="n in 2" :key="n" />
  </section>
</template>

<script>
import MixinCard from '@/components/CountMixinCard.vue'
import ComposableCard from '@/components/CountComposableCard.vue'
export default {
  components: {
    MixinCard,
    ComposableCard,
  },
}
</script>
