<template>
  <div :class="`w-full h-[100vh] transition-all duration-300 relative font-semibold ${mode}`">
    <!-- <div
      :class="`cursor-pointer bg-orange-400 absolute left-2 top-2 w-16 h-8 rounded-2xl border-orange-400 p-2 flex ${mode} items-center`"
      @click="theme = !theme"
    >
      <div class="w-6 rounded-full aspect-square bg-slate-800"></div>
    </div> -->

    <div class="w-full h-full flex flex-col gap-5 items-center justify-center">
      <img
        src="./assets/avatar.png"
        alt="My pic"
        class="rounded-full border-8 border-white min-w-64 max-w-72 w-3/5"
      />
      <div class="links flex flex-col min-w-64 max-w-72 w-3/5 gap-3 my-5">
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
  methods: {},
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