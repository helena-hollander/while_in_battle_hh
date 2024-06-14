<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
let tl = gsap.timeline({
scrollTrigger:{
  trigger: '#about',
  start: '-100% center',
  end: 'bottom center',
  scrub: .5,
  markers: true,
  
}

});
 
tl.from("#about", {
  ease: "power.out",
  x: 2000,
  
})
.from("#abouttext", {
  x: 1800,
     }, "<+25%")

tl.from("#hooman", {
  ease: "power.out",
  x: 2000,
  delay: .5,
  
})
.from("#hoomantext", {
  x: 1800,
     }, "<+25%");


  
  })

</script>
<template>
<div class="translate-x-[200px] translate-y-[100px] text-pink-300">
<h2 class="absolute font-bold  text-7xl -rotate-90 blur-sm translate-y-[40px]" id="about">creation</h2>
  <div class="absolute bottom-[100px] w-[700px] h-[800px] left-[280px] top-[-100px]" >
<p class="font-brød text-pink-300 text-2xl" id="abouttext">This dance performance is a meeting between 14 of Cullberg’s own dancers and 10 external dancers from the street dance community, by the choreographer Hooman Sharifi. They influence eachother and their different backgrounds flavour the performance in various ways. The music by Neda Sanai is based on deconstructed Iranian folk songs.<br><br>From the battle the Dancers rise, as individuals and together. They spring from the fight, the resistance, the coexistence. From the will and necessity to make a stand for something that might be taken from you, and the ability to use your own language. <em>Our language is dance.</em></p>
  </div>
<div class="translate-x-[600px] translate-y-[360px]">
<h2 id="hooman" class="absolute font-display blur-xs text-6xl -rotate-90  translate-y-[260px] -translate-x-[260px]">Hooman Sharifi</h2>
<p id="hoomantext" class="font-brød w-[700px] text-2xl translate-x-[40px]">Choreographer Hooman Sharifi (NO) was born in Tehran in 1973 and embarked on a solitary journey to Norway at 15. His dance career began in hip hop during his teenage years, evolving into classical and modern ballet. He holds a degree in choreography from the Oslo National Academy of the Arts. Sharifi is captivated by the confluence of dance, theater, and visual arts.<br>In 2000, he established Impure Company, dedicated to social engagement, creating over 30 choreographic masterpieces. Sharifi's movement language is a visceral symphony of physical exhaustion, intensity, and power, delving into hierarchies, power dynamics, political systems, and violence.<br>From 2014 to 2018, he served as artistic director of Norway's national contemporary dance company, Carte Blanche. His collaborations with prestigious institutions have garnered significant international acclaim, with his works resonating powerfully on the global stage.</p>
</div>
</div>

</template>