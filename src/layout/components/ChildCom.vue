<template>
  <div class="test-wraper">
    <el-form :model="addressInfo" :rules="rules">
      <el-form-item label="省份" prop="provice">
        <el-input v-model="addressInfo.provice" placeholder="填写省"></el-input>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-input v-model="addressInfo.city" placeholder="填写城市"></el-input>
      </el-form-item>
      <el-form-item label="区县" prop="county">
        <el-input
          v-model="addressInfo.county"
          placeholder="填写区县"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="detail">
        <el-input
          v-model="addressInfo.detail"
          placeholder="填写详细信息"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ChildCom',
  props: {
    address: {
      type: Object
    }
  },
  data() {
    return {
      addressInfo: {},
      provice: '',
      rules: {
        provice: [{ required: true, message: '请输入省份', trigger: 'blur' }],
        city: [{ required: true, message: '请输入城市', trigger: 'blur' }],
        county: [{ required: true, message: '请输入区县', trigger: 'blur' }],
        detail: [{ required: false, message: '请输入详细', trigger: 'blur' }]
      }
    };
  },
  mounted() {
    this.addressInfo = this.address;
  }
};
</script>

<style lang="scss" scoped>
.test-wraper {
}
</style>
