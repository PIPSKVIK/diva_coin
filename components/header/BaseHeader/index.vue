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
    </div>
  </nav>
</template>

<script>
import './index.scss'

export default {
  name: 'BaseHeader',

  data() {
    return {
      navLinks: [
        { name: 'новинки', link: '#' },
        { name: 'каталог', link: '#' },
        { name: 'о нас', link: '#' },
        { name: 'sale', link: '#' },
      ],
    }
  },
}
</script>
