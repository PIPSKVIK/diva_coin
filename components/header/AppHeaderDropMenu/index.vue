<template>
  <div class="header-drop-menu">
    <nuxt-link
      v-for="(item, idx) in dropMenuLinksList"
      :key="idx"
      :to="item.link"
      class="header-drop-menu__link-wrapper"
    >
      <p class="header-drop-menu__link-name">{{ item.name }}</p>
      <p class="header-drop-menu__link-description">{{ item.description }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import './index.scss'
import { PROPS_ARRAY_DEFAULT } from '@/constants/props'

export default {
  name: 'AppHeaderDropMenu',

  props: {
    dropMenuLinksList: PROPS_ARRAY_DEFAULT,
  },
}
</script>
