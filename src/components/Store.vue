<template>
<div class="store">
  <Paginator/>
  <PhonesOnCurrentPage/>
  <Paginator v-if="isPortrait()" /><!-- show bottom Paginator when screen is smaller -->
</div>
</template>

<script>
import Paginator from "@/components/Paginator.vue";
import PhonesOnCurrentPage from "@/components/PhonesOnCurrentPage.vue";

export default {
  name: "store",
  components: {
    Paginator,
    PhonesOnCurrentPage,
  },
  methods: {
    isPortrait() {
      return (window.innerHeight > window.innerWidth || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/mixins/sass.scss";

.store {
  @include width-height(100%, '');
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>