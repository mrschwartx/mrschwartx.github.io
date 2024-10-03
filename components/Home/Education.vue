<script lang="ts" setup>
import { defineProps, ref } from "vue";

interface Education {
  name: string;
  major: string;
  duration: string;
  description: string;
  url: string;
}

const educationList = ref<Education[]>([
  {
    name: "Universitas Islam Al-Ihya Kuningan",
    major: "Informatics ( S.Kom ) - GPA. 3.88",
    duration: "Sep 2020 - Jun 2024",
    description:
      "Thesis: Development of Prototype Automatic Waste Classification System based on Robotics with Machine Learning.",
    url: "https://unisa.ac.id/",
  },
  {
    name: "SMK Pertiwi Kuningan",
    major: "Computer and Network Engineering",
    duration: "Jul 2014 - Jun 2017",
    description:
      "Final Project: IoT-based Smart School System: Design and Implementation",
    url: "https://smkpertiwikng.sch.id/",
  },
]);

interface Courses {
  name: string;
  topic: string;
  duration: string;
  description: string;
  url: string;
}

const coursesList = ref<Courses[]>([
  {
    name: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    topic: "Mobile Development (Android)",
    duration: "Feb - Jun 2024",
    description: "",
    url: "https://www.linkedin.com/in/agussyahrilmubarok/overlay/1721348400634/single-media-viewer/?profileId=ACoAAE4xVIMB8b4IGFeW4n8NzvroB8pPFigrlHY",
  },
  {
    name: "Dicoding Indonesia",
    topic: "Backend Development (NodeJS)",
    duration: "Jan - Sep 2023",
    description: "",
    url: "https://www.dicoding.com/certificates/GRX5220VVX0M",
  },
  {
    name: "Digital Talent Scholarship - Kominfo",
    topic: "Scalable Web Services with Go",
    duration: "Feb - Jun 2022",
    description: "",
    url: "https://digitalent.kominfo.go.id/cek-sertifikat#",
  },
]);
</script>

<template>
  <div>
    <h2 class="section-title">Educations</h2>
    <ul class="space-y-4">
      <li v-for="item in educationList" :key="item.url">
        <NuxtLink
          class="flex items-start gap-4 group rounded-lg mt-5 hover:bg-gray-100 dark:hover:bg-gray-700"
          :to="item.url"
          target="_blank"
          rel="noopener noreferrer"
          external
        >
          <div class="flex flex-col flex-1">
            <h3
              class="text-sm font-medium text-gray-900 group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400"
            >
              {{ item.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-300 text-xs my-1">
              {{ item.major }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-400 text-xs mt-1"
              style="text-align: justify"
            >
              {{ item.description }}
            </p>
          </div>
          <div
            class="flex-shrink-0 text-right text-gray-500 dark:text-gray-300 text-sm"
          >
            {{ item.duration }}
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2 class="uppercase text-xs font-semibold text-gray-400 mt-12 mb-6">
      COURSES & CERTIFICATION
    </h2>
    <ul class="space-y-4">
      <li v-for="item in coursesList" :key="item.url">
        <NuxtLink
          class="flex items-start gap-4 group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          :to="item.url"
          target="_blank"
          rel="noopener noreferrer"
          external
        >
          <div
            class="flex-shrink-0 text-right text-gray-500 dark:text-gray-300 text-sm"
          >
            {{ item.duration }}
          </div>
          <div class="flex flex-col flex-1">
            <h3
              class="text-sm font-medium text-gray-900 group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400"
            >
              {{ item.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-300 text-xs my-1">
              {{ item.topic }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-400 text-sm mt-2"
              style="text-align: justify"
            >
              {{ item.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

.section-title {
  text-transform: uppercase;
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: #9ca3af; /* text-gray-400 */
  margin-bottom: 1.5rem; /* mb-6 */
}
</style>
