<template>
  <nav class="header">
    <div class="header__top">
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
        <div class="header__nav-buttos-wrapper">
          <div class="header__nav-basket-wrapper">
            <AppIconButton class="header__nav-basket-button">
              <svg-icon name="icon-basket-button" />
            </AppIconButton>
            <AppCountBage class="header__nav-basket-count" :count="0" />
          </div>
          <div class="header__nav-likes-wrapper">
            <AppIconButton class="header__nav-likes-button">
              <svg-icon name="icon-like-button" />
            </AppIconButton>
            <AppCountBage class="header__nav-likes-count" :count="0" />
          </div>
          <div class="header__nav-language-wrapper">
            <AppIconButton class="header__nav-language-button">
              <svg-icon name="icon-language-button" />
            </AppIconButton>
          </div>
        </div>
      </div>
      <div class="header__logo-wrapper">
        <img
          class="header__logo"
          src="~/assets/images/icons/icon-main-logo.jpg"
          alt="main-logo"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import './index.scss'
import AppNavLink from '@/components/Ui/buttons/AppNavLink'
import AppIconButton from '@/components/Ui/buttons/AppIconButton'
import AppCountBage from '@/components/Ui/notificationElements/AppCountBage'
import { NAV_LINK_BUTTONS } from '@/models/navLinks'

export default {
  name: 'AppHeader',

  components: {
    AppNavLink,
    AppIconButton,
    AppCountBage,
  },

  data() {
    return {
      navLinks: NAV_LINK_BUTTONS,
    }
  },
}
</script>
