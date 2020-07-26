<template>
  <div class="app-main-wraper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      formData: {
        name: 'lily',
        address: {
          provice: '',
          city: '',
          county: '',
          detail: ''
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
