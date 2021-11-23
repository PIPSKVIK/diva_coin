<template>
  <div class="main-layout">
    <BaseHeader />
    <Nuxt />
  </div>
</template>

<script>
import BaseHeader from '@/components/header/BaseHeader/index.vue'

export default {
  name: 'MainLayout',

  components: {
    BaseHeader,
  },
}
</script>
