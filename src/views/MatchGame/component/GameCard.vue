<script setup>
// const props = defineProps({
//     cards: Array,
//     openedCard: Array,
//     clickHandler: null,
//     successCard: Array,
// });

const cards = defineModel('cards')
const openedCard = defineModel('openedCard')
const clickHandler = defineModel('clickHandler')
const successCard = defineModel('successCard')
</script>
<template>
  <p>
  </p>
    <div v-for="(n, idx) in cards"
        class="flip-card"
        :class="{
          'open': openedCard.includes(idx)
        }"
        @click.lazy="clickHandler(idx)">
        <div class="flip-card-inner" v-if="cards[idx] > 0 && !successCard.includes(idx)">
          <div class="flip-card-front">n: {{n}}<br>
            idx:{{ idx }}</div>
          <div class="flip-card-back">
            <img :src="`./img/cat-0${n}.jpg`" alt="">
          </div>
        </div>
      </div>
</template>
<style scoped src="./../GameCard.css"></style>