<script lang="ts" setup>
import { primaryTechIcon } from "@/assets/primaryTechIcons";
import { secondaryTechIcon } from "~/assets/secondaryTechIcons";
import { othersTechIcons } from "@/assets/othersTechIcons";
</script>

<template>
  <!-- Primary Tech Section -->
  <h2 class="section-title">Primary Technologies I Have Used</h2>
  <div class="svg-container">
    <div
      v-for="icon in primaryTechIcon"
      :key="icon.id"
      class="icon"
      v-html="icon.svg"
      :aria-label="icon.name"
    />
  </div>

  <!-- Secondary Tech Section -->
  <h2 class="section-title mt-6">Secondary</h2>
  <div class="svg-container">
    <div
      v-for="icon in secondaryTechIcon"
      :key="icon.id"
      class="icon"
      v-html="icon.svg"
      :aria-label="icon.name"
    />
  </div>

  <!-- Others Tech Section -->
  <h2 class="section-title mt-6">OTHERS</h2>
  <div class="svg-container">
    <div
      v-for="icon in othersTechIcons"
      :key="icon.id"
      class="icon"
      v-html="icon.svg"
      :aria-label="icon.name"
    />
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
