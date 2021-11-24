<template>
  <button
    class="icon-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import './index.scss'

export default {
  name: 'AppIconButton',
}
</script>
