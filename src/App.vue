<template>
  <div class="main-body">
    <svgIcons iconName="3D技术" color="red" width="100vw" height="95vh"></svgIcons>
    <el-button :icon="Plus" @click="login"></el-button>
    <!-- 修改后的代码 -->
    <el-button :icon="Edit"><span>123121</span></el-button>
  </div>
  <div>
    
  </div>
</template>
<script setup lang="ts">
import { Plus, Edit } from '@elicon'
import {login} from '@/api/login'
import {ApiResponse} from './interfaceApi'
login({username: 'admin',password: 'admin'}).then((res:ApiResponse) =>{
  if (res.data.code === 200) {
    console.log('登陆成功');
    
    window.sessionStorage.setItem('token',res.data.token)
  }
}).catch((err:Error):void =>{
  console.log(err);
  debugger
})
</script>
<style lang="scss" scoped>
.main-body
{
  background-color: $color;
}
</style>
