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
import {
  phoneDataMixin
} from "@/mixins/phoneData.js";
import {
  mapActions,
  mapState
} from "vuex";
import {
  ACTION_PREVIOUS_PAGE,
  ACTION_CURRENT_PAGE
} from "../../store/types.js";

export default {
  name: "paginator",
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArrFromMixin: phoneDataMixin.phonesArr,
      previous_page: 0,
      current_page: 1,
      lastPageNum: 0,
    };
  },
  computed: {
    ...mapState({
      items_count: state => state.items_count,
      // get data from Vuex to render the last page you were on
      previous_page_vuex: state => state.previous_page,
      current_page_vuex: state => state.current_page,
    }),
  },
  mounted() {
    this.previous_page = this.previous_page_vuex;
    this.current_page = this.current_page_vuex;
    this.lastPageNum = Math.ceil(
      this.phonesArrFromMixin.length / this.items_count
    );
  },
  methods: {
    ...mapActions({
      previous_page_action: ACTION_PREVIOUS_PAGE,
      current_page_action: ACTION_CURRENT_PAGE
    }),
    prevPage() {
      this.previous_page--;
      this.current_page--;

      const slicedArr = this.phonesArrFromMixin.slice(this.previous_page * this.items_count, this.current_page * this.items_count);
      this.$emit('phonesArr', slicedArr);
    },
    nextPage() {
      this.previous_page++;
      this.current_page++;

      const slicedArr = this.phonesArrFromMixin.slice(this.previous_page * this.items_count, this.current_page * this.items_count);
      this.$emit('phonesArr', slicedArr);
    }
  },
  beforeDestroy() {
    // save data to Vuex to render the last page you were on
    this.previous_page_action(this.previous_page);
    this.current_page_action(this.current_page);
  }
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
