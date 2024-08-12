<template>
  <div
    :class="`w-full min-h-[100vh] items-center smooth relative font-semibold ${mode}`"
  >
    <div
      :class="`cursor-pointer bg-indigo-300 md:relative absolute  left-2 top-2 w-16 h-8 rounded-2xl border-orange-400 p-2 flex items-center`"
      @click="changeMood()"
    >
      <div
        :class="`w-6 rounded-full toggle aspect-square absolute left-2 bg-[#fa0] smooth ${
          mode == 'bg-dark' ? 'active' : ''
        }`"
      ></div>
    </div>
    <div
      class="min-w-64 max-w-72 mx-auto w-3/5 h-full flex flex-col pt-2 justify-around items-center"
    >
      <div
        class="card relative w-full aspect-square cursor-pointer smooth transform-style-preserve-3d"
        @click="rotateCard()"
        :style="`transform: ${this.rotation};`"
      >
        <img
          src="./assets/avatar.jpeg"
          class="front w-full absolute rounded-full border-8 border-white backface-hidden"
        />
        <img
          src="./assets/qr-code.svg"
          class="back rotate-180 absolute rounded-3xl backface-hidden rotate-y-180"
        />
      </div>
      <div class="links flex flex-col w-full gap-3 my-5">
        <Link v-for="link in links" :key="link" :link="link" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./components/Link.vue";
import fbImg from "./assets/facebook.svg";
import instagramImg from "./assets/instagram.jpg";
import twitterImg from "./assets/twitter.png";
import liImg from "./assets/linkedin.png";
import ghImg from "./assets/github.jpg";
import waImg from "./assets/whatsapp.svg";
import behanceImg from "./assets/behance.png";
export default {
  data() {
    return {
      mode: "bg-dark",
      rotation: null,
      links: [
        {
          title: "Facebook",
          img: fbImg,
          dist: "https://www.facebook.com/profile.php?id=100003984241851&mibextid=ZbWKwL",
        },
        {
          title: "Instagram",
          img: instagramImg,
          dist: "https://www.instagram.com/3bdellatiif4",
        },
        {
          title: "X (Twitter)",
          img: twitterImg,
          dist: "https://twitter.com/3bdellatiif",
        },
        {
          title: "LinkedIn",
          img: liImg,
          dist: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
        {
          title: "Github",
          img: ghImg,
          dist: "https://github.com/abdelrahmanlatif04",
        },
        {
          title: "Whatsapp",
          img: waImg,
          dist: "https://wa.me/+201070039593",
        },
        {
          title: "Behance",
          img: behanceImg,
          dist: "https://www.behance.net/3bdellatiif",
        },
      ],
    };
  },
  methods: {
    rotateCard() {
      this.rotation =
        this.rotation == "rotateY(180deg)" ? "none" : "rotateY(180deg)";
    },
    changeMood() {
      this.mode = this.mode == "bg-light" ? "bg-dark" : "bg-light";
    },
  },
  components: { Link },
};
</script>

<style>
.active {
  transform: translateX(calc(-100% - 8px));
  @apply bg-white left-full after:absolute after:right-0 after:top-0 after:w-4/5 after:aspect-square after:rounded-full after:bg-indigo-300;
}
</style>
