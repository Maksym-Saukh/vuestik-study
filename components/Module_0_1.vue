<template>
  <h1>What is Vuestic UI</h1>
  <p>Vuestic UI is an OpenSource Vue 3 based UI framework. It is a MIT-licensed UI framework that provides ready-to-use frontend components that are easily configurable and speed up development of responsive and fast-loading web interfaces. It was initially released in May 2021 by Epicmax and that is what Vuestic UI today:</p>


  <h2>Features overview</h2>
  <va-list class="benefits-list">
    <va-list-item v-for="(benefit, index) in benefits" :key="index">
      <va-list-item-section avatar>
        
      </va-list-item-section>
      <va-list-item-section>
        <va-list-item-label class="item"><va-icon name="check_circle" color="success" /> {{ benefit }}</va-list-item-label>
      </va-list-item-section>
    </va-list-item>
  </va-list>

  <hr>
  <h2>Example of using Vuestic UI</h2>
  
  <a href="https://admin-demo.vuestic.dev/dashboard"class="im"><img src="../Contents/Live demo.png" alt=""></a>
  

  
</template>

<script setup>
const benefits = [
  "100% Free and Open Source (MIT License)",
  "Built with Vue 3 and Vite 🤘",
  "60+ customizable UI components",
  "Dark/light theme support out of the box 🖤🤍",
  "Fully TypeScript supported",
  "Responsive and mobile-friendly design",
  "Accessibility (a11y) compliant ❗",
  "Modular - import only what you need",
  "Active community and regular updates 🫂",
  "Detailed documentation with examples"
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


</style>