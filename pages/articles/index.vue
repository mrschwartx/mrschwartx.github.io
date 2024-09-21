<script setup>
useSeoMeta({
  title: "Articles | Agus Syahril Mubarok",
  description,
});

const description =
  "Stay updated with my latest blog entries, where I dive into various topics, share insights, and offer tips on software development, technology trends, and more.";

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>

<template>
  <main class="min-h-screen">
    <AppArticleHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>
