<template>
    <div>
        <div class="container">
            <template v-for="item in menu">
                <el-menu-item :key="item.path">{{item}}</el-menu-item>
            </template>
        </div>
    </div>
</template>
<script>
export default {
  name: "siderBarItem",
  components: {},
  props: ["menu"]
};
</script>
<style lang="stylus" scoped>
</style>

