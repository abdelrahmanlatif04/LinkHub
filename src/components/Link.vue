<template>
  <a
    :href="link.dist"
    target="_blank"
    class="asd w-full bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-14 smooth py-3 flex h-12 items-center gap-2 relative overflow-hidden before:h-full before:absolute before:aspect-square before:-left-10 hover:before:left-0 before:smooth before:bg-[#fa0]"
  >
    <img :src="link.img" alt="" class="h-[90%]" />
    {{ link.title }}
  </a>
</template>

<script>
export default {
  props: ["link", "theme"],
};
</script>

<style scoped>
a::before {
  content: "";
  background-image: url("./src/assets/contact.png");
  background-size: 70% ;
  background-position:50% 50% ;
  background-repeat: no-repeat;
}
</style>
