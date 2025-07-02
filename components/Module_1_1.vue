<template>
  <h1>Installation</h1>
  <p>You can create a new project or integrate Vuestic UI into an existing application. There are three ways to create new Vuestic App. All of them mostly the same and provides the same features.</p>


  <h2>Create Vuestic</h2>
  <p class="disc"><div class="divCret">create-vuestic</div> is CLI based tool to create new Vuestic App. This is a recommended way to scaffold new Vue apps with Vuestic.</p>
  <p class="parag">npm</p>
  <div class="instblock">
    npm create vuestic@latest
  </div><br>

  <p class="parag">yarn</p>
  <div class="instblock">
    yarn create vuestic
  </div>
  
  

  
  
  

  
</template>

<script setup>


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
  margin-bottom: 0;
  
}

p {
  font-size: 16px;
  color: black;
  margin-bottom: 32px;
  line-height: 1.6;
  padding-bottom: 30px;
}
.disc {
  font-size: 16px;
  color: black;
  line-height: 1.6;
  margin: 0px;
  
}
.parag{
  margin-bottom: 5px;
  padding-bottom: 0px;
  margin-top: 20px;
  
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
  margin-bottom: 40px;
}


.divCret{
  display: inline-flex;
  border: 1px silver solid;
  border-radius: 5px;
  background-color: rgba(192, 192, 192, 0.397);
  letter-spacing: 1px;
  width: 120px;
  height: 20px;
  justify-content: center;
  align-items: center;
  
}
.instblock{
  display: flex;
  padding-left: 30px;
  align-items: center;
  border: 1px silver solid;
  border-radius: 5px;
  background-color: rgba(192, 192, 192, 0.397);
  width: 100%;
  height: 50px;
  letter-spacing: 1px;
  

}




</style>