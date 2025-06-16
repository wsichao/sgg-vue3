<template>
  <div>
    <svg :style={width,height}>
      <use :xlink:href="prefix+iconName" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  iconName: {
    type: String,
    default: 'background'
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>