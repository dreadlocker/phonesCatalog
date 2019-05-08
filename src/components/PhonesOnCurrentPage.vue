<template>
<div class="phones">
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
</div>
</template>

<script>
import { mapState } from "vuex";
import { phoneDataMixin } from "@/mixins/phoneData.js";

export default {
  name: "phones",
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArr: [],
      phonesArrFromMixin: phoneDataMixin.phonesArr,
    };
  },
  computed: {
    ...mapState({
      previous_page: state => state.previous_page,
      current_page: state => state.current_page,
      items_count: state => state.items_count,
    }),
  },
  mounted() {
    this.phonesArr = this.phonesArrFromMixin.slice(this.previous_page * this.items_count, this.current_page * this.items_count);
  },
  watch: {
    current_page: function(val) {
      this.phonesArr = this.phonesArrFromMixin.slice(this.previous_page * this.items_count, this.current_page * this.items_count);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/mixins/sass.scss";

.phones {
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
  .phones {
    justify-content: center;
  }
}
</style>