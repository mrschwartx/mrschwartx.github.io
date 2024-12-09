<script setup>
useSeoMeta({
  title: "Projects | Agus Syahril Mubarok",
  description,
});

const projects = ref([]);

const description =
  "Explore my diverse projects that showcase my skills, creativity, and problem-solving abilities. Discover how I overcome challenges and deliver impactful results.";

const { data: projectsData } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);

if (projectsData.value) {
  projects.value = [...projectsData.value].sort((a, b) => b.id - a.id);
}
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>
