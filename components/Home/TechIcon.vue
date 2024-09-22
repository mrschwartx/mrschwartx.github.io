<script lang="ts" setup>
import { primaryTechIcon } from "@/assets/primaryTechIcons";
import { secondaryTechIcon } from "~/assets/secondaryTechIcons";
import { othersTechIcons } from "@/assets/othersTechIcons";
</script>

<template>
  <div>
    <h2 class="section-title">Technologies I Have Used</h2>
    <div class="svg-container text-gray-900 dark:text-gray-400">
      <div
        v-for="icon in primaryTechIcon"
        :key="icon.id"
        class="icon"
        v-html="icon.svg"
        :aria-label="icon.name"
      />
    </div>

    <p class="text-gray-500 dark:text-gray-300 text-xs my-6">Secondary</p>
    <div class="svg-container text-gray-900 dark:text-gray-400">
      <div
        v-for="icon in secondaryTechIcon"
        :key="icon.id"
        class="icon"
        v-html="icon.svg"
        :aria-label="icon.name"
      />
    </div>

    <p class="text-gray-500 dark:text-gray-300 text-xs my-6">Others</p>
    <div class="svg-container text-gray-900 dark:text-gray-400">
      <div
        v-for="icon in othersTechIcons"
        :key="icon.id"
        class="icon"
        v-html="icon.svg"
        :aria-label="icon.name"
      />
    </div>
  </div>
</template>

<style scoped>
.section-title {
  text-transform: uppercase;
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: #9ca3af; /* text-gray-400 */
  margin-bottom: 1.5rem; /* mb-6 */
}

.svg-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: fill 0.3s;
}

.icon:hover {
  fill: cyan;
}
</style>
