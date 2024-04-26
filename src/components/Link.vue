<template>
  <a
    :href="dist"
    target="_blank"
    class="w-full bg-white rounded-lg px-2 py-3 flex h-12 items-center gap-2"
  >
    <img :src="img" alt="" class="h-[90%]" />
    {{ title }}</a
  >
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["img", "title", "dist"],
};
</script>
