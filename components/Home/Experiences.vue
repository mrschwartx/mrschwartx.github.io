<template>
  <div>
    <h2 class="section-title">Related Experiences</h2>

    <ul class="space-y-4">
      <li v-for="item in experienceList" :key="item.company">
        <div class="flex flex-1 justify-between">
          <div class="max-w-sm flex-1">
            <h3
              class="text-sm font-medium text-gray-900 group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
              {{ item.company }}
            </h3>
            <p class="text-gray-500 dark:text-gray-300 text-xs my-1">
              {{ item.title }}
            </p>
            <p class="text-gray-500 dark:text-gray-300 text-sm my-1">
              {{ item.duration }}
            </p>
          </div>
        </div>
        <div class="flex flex-1 justify-between">
          <ul class="text-gray-600 dark:text-gray-400 text-sm list-disc list-inside">
            <li v-for="desc in item.description" :key="desc" class="text-justify">{{ desc }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Experience {
  company: string;
  title: string;
  duration: string;
  description: string[];
}

const experienceList = ref<Experience[]>([
  {
    company: "Hand Enterprise Solutions Indonesia",
    title: "Software Engineer",
    duration: "Sep 2024 - Present",
    description: [
      "Perform in-depth analysis and reporting of system alerts to ensure timely identification and resolution of issues, continuously monitor and optimize system performance to maintain operational excellence, collaborate closely with business teams to align system capabilities with customer requirements, and work with technology teams to implement data-driven improvements and support the development of advanced system features for enhanced functionality and scalability.",
    ],
  },
  {
    company: "MZS Software House",
    title: "Software Engineer",
    duration: "Dec 2021 - Oct 2023",
    description: [
      "Designed and optimized scalable backend systems and web applications using Golang and PHP frameworks, developed high-performance microservice architectures and APIs for seamless integration, enhanced user experiences through backend-frontend collaboration, and ensured high-quality software delivery by leading code reviews and fostering adherence to industry best practices.",
    ],
  },
]);
</script>

<style scoped>
ul {
  list-style-type: none;
}

.section-title {
  text-transform: uppercase;
  font-size: 0.75rem;
  /* text-xs */
  font-weight: 600;
  /* font-semibold */
  color: #9ca3af;
  /* text-gray-400 */
  margin-bottom: 1.5rem;
  /* mb-6 */
}
</style>
