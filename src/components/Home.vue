<template>

        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            background-color="#545c64"
                            text-color="#fff"
                            router
                            default-active="user"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="user">选项1</el-menu-item>
                                <el-menu-item index="/ai2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

    .el-container {
        height: 100%;
    }

    .el-header {
        background-color: #B3C0D1;
    }

    .el-aside {
        background-color: #D3DCE6;
    }

    .el-menu {
       border-right: none;
    }

    .el-main {
        background-color: #E9EEF3;
    }




</style>
