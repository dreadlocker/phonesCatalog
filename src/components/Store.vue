<template>
<div class="store">
  <Paginator @phonesArr="arrFromChild" />
  <div v-for="phone in phonesArr" :key="phone.id" class="phone">
    <h1>{{phone.model}}</h1>
    <router-link :to="'/phone/'+phone.id">
      <img :src="phone.image">
      </router-link>
      <div>
        <router-link :to="'/phone/'+phone.id">
          <a>Click for more info</a>
        </router-link>
      </div>
  </div>
  <Paginator v-if="isPortrait()" /> <!-- show bottom Paginator when screen is smaller -->
</div>
</template>

<script>
import {
  phoneDataMixin
} from "@/mixins/phoneData.js";
import Paginator from "@/components/Paginator.vue";
import {
  mapState,
} from "vuex";

export default {
  name: "store",
  components: {
    Paginator
  },
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArr: [],
    };
  },
  computed: {
    ...mapState({
      previous_page: state => state.previous_page,
      current_page: state => state.current_page,
      items_count: state => state.items_count,
    }),
  },
  methods: {
    isPortrait() {
      return (window.innerHeight > window.innerWidth || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent));
    },
    arrFromChild(val) {
      this.phonesArr = val;
    },
  },
  mounted() {
    this.phonesArr = phoneDataMixin.phonesArr.slice(this.previous_page * this.items_count, this.current_page * this.items_count);
  }
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
h1 {
  font-size: 1rem;
}
.phone {
  padding: 0 1rem 4rem;
}
a {
  user-select: none;
}

@media screen and (orientation: portrait) {
  .store {
    justify-content: center;
  }
}
</style>
