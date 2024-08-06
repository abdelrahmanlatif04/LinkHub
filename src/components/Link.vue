<template>
  <a
    :href="link.dist"
    target="_blank"
    class="asd w-full bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-14 smooth py-3 flex h-12 items-center gap-2 relative overflow-hidden before:h-full before:absolute before:aspect-square before:-left-10 hover:before:left-0 before:smooth before:bg-blue-600 before:bg-no-repeat before:bg-center before:bg-[length:65%] before:bg-[url('./src/assets/contact.png')]"
  >
    <img :src="link.img" :alt="link.title" class="h-[90%]" />
    {{ link.title }}
  </a>
</template>

<script>
export default {
  props: ["link"],
};
</script>
