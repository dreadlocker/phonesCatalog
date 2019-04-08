<template>
<div class="sortedByLikes">
  <div v-if="phonesArrSorted.length > 0 && phonesArrSorted[0].timesLiked > 0" id="wrapper">
    <div v-for="(phone, index) in phonesArrSliced" :key="phone.id" class="phone">
      <router-link :to="'/phone/'+phone.id">
        <h1 id="smallerFont">{{phone.model}}</h1>
        <img :src="phone.image">
      </router-link>
        <div>
          <router-link :to="'/phone/'+phone.id">
            <a>Likes: {{phonesArrSorted[index].timesLiked}}</a>
          </router-link>
        </div>
    </div>
    <div v-if="phonesArrSliced.length < phonesArr.length" @click="showMorePhones()" id="showMore">Show more</div>
  </div>
  <h1 v-else>No products have been liked yet.</h1>
</div>
</template>

<script>
import {
  phoneDataMixin
} from "@/mixins/phoneData.js";

export default {
  name: "sortedByLikes",
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArrSorted: [],
      phonesArrSliced: [],
      phonesArr: phoneDataMixin.phonesArr,
      sliceToIndex: 3,
      increaseSlicingWith: 3,
    };
  },
  mounted() {
    const phonesArrCopy = [...this.phonesArr];
    this.phonesArrSorted = phonesArrCopy.sort((a, b) => b.timesLiked - a.timesLiked);
    this.phonesArrSliced = this.phonesArrSorted.slice(0, this.sliceToIndex);
  },
  methods: {
    showMorePhones() {
      this.sliceToIndex += this.increaseSlicingWith;
      this.phonesArrSliced = this.phonesArrSorted.slice(0, this.sliceToIndex);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/mixins/sass.scss";

#wrapper {
  display: flex;
  flex-direction: column;
}

.phone {
  padding: 0 1rem 4rem;
}

#smallerFont {
  font-size: 83%;
}

img {
  @include width-height('', 10rem);
}

#showMore {
  @include width-height(100%, '');
  display: flex;
  justify-content: center;
  color: #2700ee;
  cursor: pointer;
}
</style>
