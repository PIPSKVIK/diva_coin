<template>
  <div class="count-bage">
    <span class="count-bage__number">
      {{ count }}
    </span>
  </div>
</template>

<script>
import './index.scss'
import { PROPS_NUMBER_DEFAULT } from '@/constants/props'

export default {
  name: 'AppCountBage',

  props: {
    count: PROPS_NUMBER_DEFAULT,
  }
}
</script>
