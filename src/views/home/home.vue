<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">管理平台</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout style="height:calc(100vh - 64px)">
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu
                            ref="leftmenu"
                            @on-select="isCollapsed=false"
                            @on-open-change="isCollapsed=false"
                            active-name="0-1"
                            theme="dark" width="auto"
                            :open-names="opennames"
                            :class="menuitemClasses">
                        <MenuItem name="0-1" to="/">
                            <Icon type="ios-browsers-outline"></Icon>
                            <span>工作平台</span>
                        </MenuItem>
                        <Submenu name="'1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                <span>用户管理</span>
                            </template>

                        <MenuItem name="1-1" to="/info">用户列表</MenuItem>
                        <MenuItem name="1-2">option 2</MenuItem>
                        <MenuItem name="1-3">option 3</MenuItem>
                        </Submenu>
                        <Submenu name="'2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                <span>系统管理</span>
                            </template>

                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                            <MenuItem name="2-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-settings"></Icon>
                                <span>操作设置</span>
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                            <MenuItem name="3-3">Option 3</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '15px'}">
                    <router-view></router-view>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>

    export default {
        name:'home',
        components:{
        },
        data () {
            return {
                isCollapsed: false,
                opennames:[]
            }
        },
        watch:{
            isCollapsed(val){
                if(val){
                    this.opennames=[];
                    this.$nextTick(()=>{
                        this.$refs.leftmenu.updateOpened();
                    })
                }
            }
        },
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {

        }
    }
</script>


<style scoped>
    @import "./home.css";
</style>