<template>
  <div class="main-layout">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'

export default {
  name: 'MainLayout',

  components: {
    AppHeader,
  },
}
</script>
