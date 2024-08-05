<template>
  <div
    :class="`w-full min-h-[100vh] items-center smooth relative font-semibold ${mode}`"
  >
    <div
      :class="`cursor-pointer bg-indigo-300 md:relative absolute  left-2 top-2 w-16 h-8 rounded-2xl border-orange-400 p-2 flex items-center`"
      @click="theme = !theme"
    >
      <div
        class="w-6 rounded-full toggle aspect-square absolute left-2 bg-[#fa0] smooth"
        :class="theme ? 'active' : ''"
      ></div>
    </div>

    <div
      class="min-w-64 max-w-72 mx-auto w-3/5 h-full flex flex-col justify-around items-center"
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
          class="back rotate-180 absolute w-[90%] backface-hidden rotate-y-180 m-[5%]"
        />
      </div>
      <div class="links flex flex-col w-full gap-3 my-5">
        <Link v-for="link in links" :key="link" :link="link" :mood="theme" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./components/Link.vue";
export default {
  data() {
    return {
      theme: true,
      rotation: null,
      links: null,
    };
  },
  created() {
    fetch("../links.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.links = res;
      });
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
.active {
  transform: translateX(calc(-100% - 8px));
  @apply bg-white left-full after:absolute after:right-0 after:top-0 after:w-4/5 after:aspect-square after:rounded-full after:bg-indigo-300;
}
</style>