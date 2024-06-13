<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
 
  </header>

 <RouterView />
 <div class="fixed grid end-0 translate-y-[346px] grid-cols-1 grid-rows-4 text-white">
 <nav class="grid grid-cols-1 grid-rows-4 text-right translate-x-[-270px]">
<a href="#aboutsection" class="row-start-1 font-brødbold text-4xl hover:italic">about</a>
<a class="row-start-2 font-brødbold text-4xl hover:italic">dancers</a>
<a class="row-start-3 font-brødbold text-4xl hover:italic">tour dates</a>
<a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=da" class="row-start-4 font-brødbold text-4xl hover:italic" target="_blank">tickets</a>
 </nav>
</div>

</template>
