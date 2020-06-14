<template>
  <div class="dashboard-wraper">
    <p>This is dashboard page</p>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
    console.log('jjj');
    console.log(this.$route);
  }
};
</script>
