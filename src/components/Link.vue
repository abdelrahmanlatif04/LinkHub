<template>
  <a
    :href="link.dist"
    target="_blank"
    class="asd w-full bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-14 smooth py-3 flex h-12 items-center gap-2 relative overflow-hidden before:h-full before:absolute before:w-2 before:left-0 hover:before:w-9 before:transition-all before:duration-300 before:bg-[#fa0]"
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

<style></style>
