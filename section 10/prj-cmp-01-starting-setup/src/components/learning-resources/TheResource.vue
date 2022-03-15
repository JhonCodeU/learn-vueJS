<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'A book about Vue.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: "Google's search engine",
          link: 'https://google.com',
        },
        {
          id: 'vue-cookbook',
          title: 'Vue Cookbook',
          description: 'An awesome Vue.js book',
          link: 'https://vue-cookbook.gitbook.io/',
        },
        {
          id: 'vue-in-depth',
          title: 'Vue In Depth',
          description: 'A great book about Vue.js',
          link: 'https://vue-in-depth.gitbook.io/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
