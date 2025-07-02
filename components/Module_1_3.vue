<template>
  <div class="p-6 max-w-screen-md mx-auto space-y-6">
    <h1 class="text-3xl font-bold mb-4">Structure of the Created Project</h1>

    <section>
      <p>
        After creating a Vuestic project using <code>create-vuestic</code>, it's important to understand
        the folder and file structure. This will help you navigate the project easily and know where to find or add features.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">📁 Main folders and files</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <strong><code>src/</code></strong> — the main source folder for your application code.
          <ul class="list-disc list-inside ml-6 mt-1">
            <li><code>assets/</code> — images, fonts, and other static files.</li>
            <li><code>components/</code> — Vue components.</li>
            <li><code>composables/</code> — reusable Vue composition API functions.</li>
            <li><code>router/</code> — routing configuration files.</li>
            <li><code>stores/</code> — state management (Pinia) files.</li>
            <li><code>styles/</code> — global CSS or SCSS styles and variables.</li>
            <li><code>App.vue</code> — root component.</li>
            <li><code>main.js</code> or <code>main.ts</code> — application entry point.</li>
          </ul>
        </li>
        <li>
          <strong><code>public/</code></strong> — static files copied directly to the build output (like <code>index.html</code>).
        </li>
        <li>
          <strong><code>package.json</code></strong> — project metadata and dependencies.
        </li>
        <li>
          <strong><code>vite.config.js</code></strong> — configuration for Vite build tool.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">🔍 Quick explanation of key files</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <code>main.js</code> — initializes Vue app, imports Vuestic UI plugin and mounts the app.
        </li>
        <li>
          <code>App.vue</code> — the root component, usually holds the app layout and router view.
        </li>
        <li>
          <code>router/index.js</code> or <code>router/index.ts</code> — defines the application routes.
        </li>
        <li>
          <code>stores/</code> — contains Pinia stores for state management.
        </li>
        <li>
          <code>components/</code> — place for reusable UI components.
        </li>
      </ul>
    </section>

    <section>
      <va-alert color="info">
        Understanding your project structure will speed up development and debugging.
      </va-alert>
    </section>
  </div>
</template>

<script setup>
// No additional scripts needed here
</script>

<style scoped>
code {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95em;
}

p{
  margin-bottom: 20px;
  font-size: 16px;
}
h2{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
}
li{
  margin: 10px;
  font-size: 16px;
}
h1{
  font-size: 48px;
  padding-bottom: 40px;
  color: var(--va-text-primary);
  font-weight: 700;
}
section{
  margin-bottom: 20px;
  font-size: 16px;
}
</style>