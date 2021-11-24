<template>
  <div class="nav-link">
    <AppIconButton
      v-if="dropMenu"
      class="nav-link__icon"
      :class="showDropMenu ? 'nav-link__icon--open' : null"
      @click="showDropMenu = true"
    >
      <svg-icon name="icon-drop-menu" />
    </AppIconButton>
    <nuxt-link
      :to="path"
      class="nav-link__item"
      @click.native="navLinkHeandler"
    >
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
import AppIconButton from '@/components/Ui/buttons/AppIconButton'

export default {
  name: 'AppNavLink',

  components: {
    AppHeaderDropMenu,
    AppIconButton,
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
    document.addEventListener('keydown', this.heandleKeyDown)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.hideNavDropMenu)
    document.removeEventListener('keydown', this.heandleKeyDown)
  },

  methods: {
    hideNavDropMenu() {
      this.showDropMenu = false
    },
    navLinkHeandler() {
      if (this.dropMenu) {
        this.showDropMenu = true
      }
    },
    heandleKeyDown(e) {
      if (this.dropMenu && e.key === 'Escape') {
        this.hideNavDropMenu()
      }
    },
  },
}
</script>
