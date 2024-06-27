<template>
  <div
    :class="`w-full h-[100vh] transition-all  duration-300 relative font-semibold ${mode}`"
  >
    <div
      :class="` cursor-pointer bg-indigo-300 absolute left-2 top-2 w-16 h-8 rounded-2xl border-orange-400 p-2 flex items-center`"
      @click="theme = !theme"
    >
      <div
        class="w-6 rounded-full toggle aspect-square absolute left-2 bg-[#fa0] transition-all duration-300"
        :class="theme ? 'active' : ''"
      ></div>
    </div>

    <div
      class="min-w-64 max-w-72 w-3/5 h-full flex flex-col gap-5 items-center absolute left-1/2 -translate-x-1/2 justify-center"
    >
      <div
        class="card relative w-full aspect-square cursor-pointer transition-all duration-500"
        @click="rotateCard()"
        :style="`transform: ${this.rotation};`"
      >
        <img
          src="./assets/avatar.jpg"
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
import Link from "./components/Link.vue";
import fbImg from "./assets/facebook.svg";
import instagramImg from "./assets/instagram.jpg";
import XImg from "./assets/twitter.png";
import linkedInImg from "./assets/linkedin.png";
import githubImg from "./assets/github.jpg";
import behanceImg from "./assets/behance.png";
export default {
  data() {
    return {
      theme: true,
      rotation: "180deg",
      links: [
        {
          img: fbImg,
          name: "Facebook",
          link: "https://www.facebook.com/profile.php?id=100003984241851&mibextid=ZbWKwL",
        },
        {
          img: instagramImg,
          name: "Instagram",
          link: "https://www.instagram.com/3bdellatiif04",
        },
        {
          img: XImg,
          name: "X (Twitter)",
          link: "https://twitter.com/3bdellatiif",
        },
        {
          img: linkedInImg,
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
        {
          img: githubImg,
          name: "Github",
          link: "https://github.com/abdelrahmanlatif04",
        },
        {
          img: behanceImg,
          name: "Behance",
          link: "http://www.behance.net/3bdellatiif",
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
        return "bg-primary";
      } else {
        return "bg-secondary";
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
.active {
  transform: translateX(calc(-100% - 8px));
  @apply bg-white left-full overflow-hidden after:absolute after:left-[17%] after:bottom-[17%] after:w-[85%] after:aspect-square after:rounded-full after:bg-indigo-300;
}
</style>
