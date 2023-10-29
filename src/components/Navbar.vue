<template>
  <div class="main-nav">
    <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
        <a-menu-item key="1">
          <router-link  :to="{name:'AddProject'}">Add New Todo</router-link>

        </a-menu-item>

        <a-menu-item key="2">    <router-link  :to="{name:'dashboard'}">Dashboard</router-link></a-menu-item>
    

        </a-menu>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>