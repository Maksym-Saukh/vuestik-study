<template>
  <h1>Comparison Vuestic UI with other UI frameworks</h1>


  <h2>Vuestic UI <span class="VS">vs</span>  Vuetify</h2>
  

  <!-- 🟢 Vuestic vs Vuetify -->
    <section>
      <va-data-table
        class="w-full"
        :columns="vuetifyColumns"
        :items="vuetifyRows"
      />
      <va-alert color="info" class="mt-4">
        Why Vuestic is better: Easier to learn, less "magic", ideal for learning and quick prototypes.
      </va-alert>
    </section>

  <hr>
  <h2>Vuestic UI <span class="VS">vs</span>  Element Plus</h2>
  <section>
      <va-data-table
        class="w-full"
        :columns="elementColumns"
        :items="elementRows"
      />
      <va-alert color="info" class="mt-4">
        Why Vuestic is better: Less boilerplate, more flexibility to build your own style.
      </va-alert>
    </section>
  <hr>
  <h2>Vuestic UI <span class="VS">vs</span>  BootstrapVue</h2>

  <section>
      <va-data-table
        class="w-full"
        :columns="bootstrapColumns"
        :items="bootstrapRows"
      />
      <va-alert color="info" class="mt-4">
        Why Vuestic is better: Clean, independent, future-proof architecture.
      </va-alert>
    </section>
  
  

  
</template>

<script setup>
const vuetifyColumns = [
  { key: 'feature', label: 'Feature' },
  { key: 'vuestic', label: 'Vuestic UI' },
  { key: 'vuetify', label: 'Vuetify' }
]

const vuetifyRows = [
  { feature: 'Learning curve', vuestic: '✅ Very easy', vuetify: '⚠️ Complex for beginners' },
  { feature: 'Vue 3 support', vuestic: '✅ Fully supported', vuetify: '⚠️ Partial, some APIs are complicated' },
  { feature: 'Styling', vuestic: '✅ Flexible, easy to customize', vuetify: '⚠️ Opinionated and harder to override' },
  { feature: 'Bundle size', vuestic: '✅ Lightweight', vuetify: '❌ Heavy' },
  { feature: 'Dark mode', vuestic: '✅ Built-in', vuetify: '✅ Available' },
]

const elementColumns = [
  { key: 'feature', label: 'Feature' },
  { key: 'vuestic', label: 'Vuestic UI' },
  { key: 'element', label: 'Element Plus' }
]

const elementRows = [
  { feature: 'Design/UX', vuestic: '✅ More modern', element: '⚠️ More traditional/business-oriented' },
  { feature: 'Documentation', vuestic: '✅ Simple and modern', element: '⚠️ Dry and less beginner-friendly' },
  { feature: 'Design customization', vuestic: '✅ High (theme config, CSS vars)', element: '⚠️ Limited' },
]

const bootstrapColumns = [
  { key: 'feature', label: 'Feature' },
  { key: 'vuestic', label: 'Vuestic UI' },
  { key: 'bootstrap', label: 'BootstrapVue' }
]

const bootstrapRows = [
  { feature: 'Modern architecture', vuestic: '✅ Vue 3-first, modern API', bootstrap: '❌ Built for Vue 2, weak Vue 3 support' },
  { feature: 'Visual style', vuestic: '✅ Fresh, modern', bootstrap: '⚠️ Bootstrap look, less flexible' },
  { feature: 'Flexibility', vuestic: '✅ High', bootstrap: '⚠️ Tied to Bootstrap layout system' },
]
</script>

<style scoped>
h1 {
  font-size: 48px;
  padding-bottom: 40px;
  color: var(--va-text-primary);
  font-weight: 700;
}

h2{
  font-size: 30px;
}

p {
  font-size: 16px;
  color: black;
  margin-bottom: 32px;
  line-height: 1.6;
  padding-bottom: 30px;
}

hr{
  margin-top: 40px;
  margin-bottom: 40px;
}

section{
  margin-top: 30px;
}

.benefits-list {
  background-color: var(--va-background-primary);
  border-radius: 8px;
  padding: 16px;
}

.item{
  height: 30px;
  color: black;
}

.im{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

img{
  margin-top: 30px;
  width: 80%;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 8px;
}
img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.VS {
  color: red;
  font-weight: bold;
}


</style>