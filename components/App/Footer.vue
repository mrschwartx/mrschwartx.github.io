<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer
    class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm pb-8"
  >
    <div class="flex justify-between">
      <p class="text-left">
        © {{ currentYear }} Agus. All rights reserved. Powered by
        <a
          href="https://github.com/fayazara/zooper"
          class="text-right"
          target="_blank"
          rel="noopener noreferrer"
          >zooper</a
        >.
      </p>
      <a
        href="https://github.com/agussmkertjhaan"
        class="text-right"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
    </div>
  </footer>
</template>
