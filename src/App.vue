<template>
  <div
    :class="`w-full h-[100vh] transition-all duration-300 relative font-semibold ${mode}`"
  >
    <!-- <div
      :class="`cursor-pointer bg-orange-400 absolute left-2 top-2 w-16 h-8 rounded-2xl border-orange-400 p-2 flex ${mode} items-center`"
      @click="theme = !theme"
    >
      <div class="w-6 rounded-full aspect-square bg-slate-800"></div>
    </div> -->

    <div
      class="min-w-64 max-w-72 w-3/5 h-full flex flex-col gap-5 items-center absolute left-1/2 -translate-x-1/2 justify-center"
    >
      <div
        class="card relative w-full aspect-square cursor-pointer transition-all duration-500"
        @click="rotateCard()"
        :style="`transform: ${this.rotation};`"
      >
        <img
          src="./assets/avatar.png"
          class="front w-full absolute rounded-full border-8 border-white"
        />
        <img src="./assets/qr-code.svg" class="back absolute w-[90%] m-[5%]" />
      </div>
      <div class="links flex flex-col w-full gap-3 my-5">
        <Link
          v-for="link in links"
          :key="link"
          :title="link.name"
          :dist="link.link"
          :img="link.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "./assets/avatar.png";
import Link from "./components/Link.vue";
import linkedinImg from "./assets/linkedin.png";
import facebookImg from "./assets/facebook.svg";
import twitterImg from "./assets/twitter.png";
import githubImg from "./assets/github.jpg";
import instagramImg from "./assets/instagram.jpg";
export default {
  data() {
    return {
      pic: avatar,
      theme: true,
      rotation: "180deg",
      links: [
        {
          img: facebookImg,
          name: "Facebook",
          link: "https://github.com/abdelrahmanlatif04",
        },
        {
          img: instagramImg,
          name: "Instagram",
          link: "https://github.com/abdelrahmanlatif04",
        },
        {
          img: twitterImg,
          name: "X (Twitter)",
          link: "https://twitter.com/3bdellatiif",
        },
        {
          img: linkedinImg,
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
        {
          img: githubImg,
          name: "Github",
          link: "https://github.com/abdelrahmanlatif04",
        },
      ],
    };
  },
  methods: {
    rotateCard() {
      this.rotation =
        this.rotation == "rotateY(180deg)" ? "none" : "rotateY(180deg)";
    },
  },
  components: { Link },
  computed: {
    mode() {
      if (this.theme) {
        return "bg-primary  justify-start";
      } else {
        return "bg-secondary justify-end";
      }
    },
  },
};
</script>

<style>
.card {
  transform-style: preserve-3d;
}

.front,
.back {
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}
</style>
