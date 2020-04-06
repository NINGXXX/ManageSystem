<template>
    <div>
        <div class="breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem>工作平台</BreadcrumbItem>
                <BreadcrumbItem>首页</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <Row style="margin-bottom: 40px">
            <Col span="8"><Card icon="&#xe624" title="新增用户" count="20" bgcolor="blue" fontcolor="red"></Card></Col>
            <Col span="8"><Card icon="&#xe61b" title="新增警示" count="50" bgcolor="#f3c87d" fontcolor="#c37791"></Card></Col>
            <Col span="8"><Card icon="&#xe621" title="累积处理" count="120" bgcolor="#7d9c7d" fontcolor="#317df9"></Card></Col>
        </Row>
        <div>
            <e-charts></e-charts>
        </div>
    </div>
</template>

<script>
    import Card from '../../components/content/card'
    import ECharts from '../chart/chart'
    export default {
        components: {
            Card,
            ECharts,
        },
    }
</script>

<style scoped>
    .breadcrumb{
        margin:5px 10px 0px;
        height:40px;
    }



</style>