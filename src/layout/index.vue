<template>
    <div>
        <div class="container">
            <div class="sider-container">
                <Sidebar/>
            </div>
            <div>
                <Header class="header-container"></Header>
            </div>
            <AppMain/>
        </div>
    </div>
</template>
<script>
import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";
import AppMain from "@/layout/AppMain";

export default {
  name: "layout",
  components: {
    Header
  }
};
</script>
<style lang="stylus" scoped>
</style>

