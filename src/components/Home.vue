<template>
<div class="home">
  <h1>Welcome to our phones catalog</h1>
  <h1>&#9787;</h1>
  <div id="wrapper">
    <img :src="srcChanging">
    </div>
  </div>
</template>

<script>
import {
  phoneDataMixin
} from "@/mixins/phoneData.js";

export default {
  name: "home",
  mixins: [phoneDataMixin],
  data() {
    return {
      phonesArr: phoneDataMixin.phonesArr,
      imagesSrcArr: [],
      randomIndex: Math.floor(Math.random() * (phoneDataMixin.phonesArr.length - 1)) + 1,
      srcChanging: ""
    };
  },
  methods: {
    animate() {
      let index = 1;

      setInterval(() => {
        this.randomIndex = Math.floor(Math.random() * (phoneDataMixin.phonesArr.length - 1)) + 1;
        this.srcChanging = this.imagesSrcArr[this.randomIndex];
        index++;
      }, 2000);
    }
  },
  mounted() {
    this.phonesArr.map(phoneObj => this.imagesSrcArr.push(phoneObj.image));
    this.srcChanging = this.imagesSrcArr[this.randomIndex];
    this.animate();
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

img {
  animation: disappear 2010s infinite;
}

@keyframes disappear {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
</style>
