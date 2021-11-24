<template>
  <nav class="header">
    <div class="header__top">
      <div class="header__logo-wrapper">
        <img
          class="header__logo"
          src="~/assets/images/icons/icon-main-logo.jpg"
          alt="main-logo"
        />
      </div>
      <div class="header__nav-links-wrapper">
        <AppNavLink
          v-for="(item, idx) in navLinks"
          :key="idx"
          :path="item.link"
          :drop-menu="item.dropMenu"
          :drop-menu-links-list="item.dropMenuLink"
        >
          {{ item.name }}
        </AppNavLink>
      </div>
    </div>
  </nav>
</template>

<script>
import './index.scss'
import AppNavLink from '@/components/Ui/buttons/AppNavLink'
import { NAV_LINK_BUTTONS } from '@/models/navLinks'

export default {
  name: 'AppHeader',

  components: {
    AppNavLink,
  },

  data() {
    return {
      navLinks: NAV_LINK_BUTTONS,
    }
  },
}
</script>
