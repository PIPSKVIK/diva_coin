<template>
  <div class="nav-link">
    <nuxt-link :to="path" class="nav-link__item" @click.native="navLinkHeandler">
      <slot />
    </nuxt-link>

    <transition name="fade">
      <AppHeaderDropMenu
        v-if="showDropMenu"
        :drop-menu-links-list="dropMenuLinksList"
      />
    </transition>
  </div>
</template>

<script>
import './index.scss'
import {
  PROPS_STRING_DEFAULT,
  PROPS_BOOLEAN_DEFAULT,
  PROPS_ARRAY_DEFAULT,
} from '@/constants/props'
import AppHeaderDropMenu from '@/components/header/AppHeaderDropMenu'

export default {
  name: 'AppNavLink',

  components: {
    AppHeaderDropMenu,
  },

  props: {
    path: PROPS_STRING_DEFAULT,
    dropMenu: PROPS_BOOLEAN_DEFAULT,
    dropMenuLinksList: PROPS_ARRAY_DEFAULT,
  },

  data() {
    return {
      showDropMenu: false,
    }
  },

  mounted() {
    document.addEventListener('click', this.hideNavDropMenu.bind(this), true)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.hideNavDropMenu)
  },

  methods: {
    hideNavDropMenu() {
      this.showDropMenu = false
    },
    navLinkHeandler() {
      if (this.dropMenu) {
        this.showDropMenu = true
      }
    }
  }
}
</script>
