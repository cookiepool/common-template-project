<template>
  <div class="app-main-wraper">
    <p>content</p>
    <child-com :address="formData.address"></child-com>
  </div>
</template>

<script>
import ChildCom from './ChildCom';

export default {
  name: 'AppMain',
  components: {
    'child-com': ChildCom
  },
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
