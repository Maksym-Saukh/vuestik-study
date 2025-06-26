<template>
  <VaSlider v-model="value" />

  <VaTextarea
    v-model="value"
    label="Default label (inner)"
    inner-label
  />
</template>

<script>
export default {
  data() {
    return {
      value: 45,
    };
  },
};
</script>
