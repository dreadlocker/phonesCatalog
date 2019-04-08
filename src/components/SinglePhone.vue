<template>
<!-- If phone ID doesn't exist, don't render this component...  -->
<div class="singlePhone" v-if="id < phonesArr.length">
  <img :src="phonesArr[id].image" id="phoneImg">
  <h1>{{phonesArr[id].model}}</h1>
  <div id="wrapper">
    <div v-for="(objKey, index) in Object.keys(phonesArr[id].description)" :key="index" class="flex">
      <div class="specs">{{objKey}}&nbsp;</div>
      <div>{{phonesArr[id]['description'][objKey]}}</div>
    </div>
  </div>
  <div class="likes">
    <div @click="decrementLikes" class="likeDislike">
      <img src="../assets/dislike.png">
      </div>
      <div id="count">{{phonesArr[id].timesLiked}}</div>
      <div @click="incrementLikes" class="likeDislike">
        <img src="../assets/like.png">
      </div>
      </div>
    </div>
</template>

<script>
import {
  phoneDataMixin
} from "@/mixins/phoneData.js";

export default {
  name: "singlePhone",
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArr: phoneDataMixin.phonesArr,
      id: this.$route.params.id - 1
    };
  },
  methods: {
    decrementLikes() {
      phoneDataMixin.phonesArr[this.id].timesLiked--;
    },
    incrementLikes() {
      phoneDataMixin.phonesArr[this.id].timesLiked++;
    },
  },
  // ... and redirect to /404
  beforeMount() {
    if (this.id > this.phonesArr.length) this.$router.push("/404");
  }
};
</script>

<style lang="scss" scoped>
@import "@/mixins/sass.scss";

#phoneImg {
  @include width-height('', 10rem);
}

#wrapper {
  @include width-height(36rem, '');
  display: flex;
  flex-direction: column;
  margin: auto;
}

.flex {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

.likes {
  @include width-height(14rem, 4rem);
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 3rem 0;
}

.likeDislike {
  @include width-height('', 100%);

  :active {
    transform: scale(0.9);
  }

  img {
    @include width-height('', 100%);
  }
}

#count {
  display: flex;
  align-items: center;
  font-size: 2rem;
}

.specs {
  border-right: 1px solid black;
}

@media only screen and (max-width: 610px) {
  #wrapper {
    @include width-height(100%, '');
  }
}
</style>
