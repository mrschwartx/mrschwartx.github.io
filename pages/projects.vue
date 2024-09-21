<script setup>
useSeoMeta({
  title: "Projects | Agus Syahril Mubarok",
  description,
});

const projects = ref([]);

const description =
  "Discover my work across various projects, highlighting my skills and creativity. See how I address challenges and deliver results.";

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
