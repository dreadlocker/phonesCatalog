<template>
  <div class="contactUs">
    <a href="https://www.facebook.com/neTbk.13Tu" target="_blank" id="facebook"></a>
    <a href="mailto:svetozariliev13@gmail.com" id="gmail"></a>
    <a href="https://join.skype.com/invite/otXS3Vmaa9Aj" target="_blank" id="skype"></a>
  </div>
</template>

<style lang="scss" scoped>
@import "../mixins/sass.scss";

a {
  padding: 0 1rem;
}
#facebook {
  content: url("../assets/facebook-logo.png");
  @include width-height(3rem, '');
}
#gmail {
  content: url("../assets/gmail-logo.png");
  @include width-height(4rem, '');
}
#skype {
  content: url("../assets/skype-icon.png");
  @include width-height(3rem, '');
}
</style>