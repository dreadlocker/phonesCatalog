<template>
<div class="paginator">
  <div v-if="current_page === 1"></div>
  <div v-else @click="prevPage()" id="prevPage">&lArr;&nbsp;</div>

  <div>{{current_page}} of {{lastPageNum}}</div>

  <div v-if="current_page === lastPageNum"></div>
  <div v-else @click="nextPage()" id="nextPage">&nbsp;&rArr;</div>
</div>
</template>

<script>
import { phoneDataMixin } from "@/mixins/phoneData.js";
import { mapActions, mapState } from "vuex";
import { ACTION_PREVIOUS_PAGE, ACTION_CURRENT_PAGE } from "../../store/types.js";

export default {
  name: "paginator",
  mixins: [phoneDataMixin],
  props: ['changedCurrentPage'],
  data() {
    return {
      phonesArrFromMixin: phoneDataMixin.phonesArr,
      lastPageNum: 0,
    };
  },
  computed: {
    ...mapState({
      items_count: state => state.items_count,
      // get data from Vuex to render the last page you were on
      previous_page: state => state.previous_page,
      current_page: state => state.current_page,
    }),
  },
  mounted() {
    this.lastPageNum = Math.ceil(this.phonesArrFromMixin.length / this.items_count);
  },
  methods: {
    ...mapActions({
      previous_page_action: ACTION_PREVIOUS_PAGE,
      current_page_action: ACTION_CURRENT_PAGE
    }),
    prevPage() {
      const previous_page = this.previous_page - 1;
      const current_page = this.current_page - 1;

      this.previous_page_action(previous_page);
      this.current_page_action(current_page);
    },
    nextPage() {
      const previous_page = this.previous_page + 1;
      const current_page = this.current_page + 1;

      this.previous_page_action(previous_page);
      this.current_page_action(current_page);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/mixins/sass.scss";

#prevPage,
#nextPage {
  cursor: pointer;

  &:active {
    transform: scale(0.8);
  }
}

.paginator {
  @include width-height(100%, '');
  display: flex;
  justify-content: center;
  color: #2700ee;
  font-size: 2rem;
  user-select: none;
}
</style>