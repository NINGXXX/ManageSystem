<template>
    <section class="chart">
        <Row>
            <Col :span="12">
                <div id="chartPie" style="width:80%; height:300px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartColumn" style="width:80%; height:300px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartBar" style="width:80%; height:300px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartLine" style="width:80%; height:300px;"></div>
            </Col>
            <Col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </Col>
        </Row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default{
        data (){
            return {
                chartColumn:null,
                chartBar:null,
                chartLine:null,
                chartPie:null
            }
        },
        mounted:function(){
            var _this=this;
            //基于准备好的dom，初始化echarts实例
            this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartPie = echarts.init(document.getElementById('chartPie'));

            this.chartColumn.setOption({
                title: { text: '告警次数' },
                tooltip: {},
                xAxis: {
                    data: ["CPU告警","MySQL","磁盘告警","主机告警","内存告警"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [15, 31, 23, 11, 38]
                }]
            });

            this.chartBar.setOption({
                title: {
                    text: '告警日志',
                  //  subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['上周', '本周']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['CPU告警','内存告警','主机告警','磁盘告警','MySQL告警','总告警数']
                },
                series: [
                    {
                        name: '上周',
                        type: 'bar',
                        data: [31, 40, 19, 15, 36, 141]
                    },
                    {
                        name: '本周',
                        type: 'bar',
                        data: [27, 45, 16, 11, 33, 133]
                    }
                ]
            });
            this.chartLine.setOption({
                title: {
                    text: '告警日志'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['CPU告警','MySQL告警','内存告警']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'CPU告警',
                        type:'line',
                        stack: '总量',
                        data:[4, 6, 7, 4, 5, 7, 4]
                    },
                    {
                        name:'MySQL告警',
                        type:'line',
                        stack: '总量',
                        data:[2, 2, 5, 2, 3, 1, 3]
                    },
                    {
                        name:'内存告警',
                        type:'line',
                        stack: '总量',
                        data:[6,9, 11, 8, 10, 10, 13]
                    }
                ]
            });
            this.chartPie.setOption({
                title : {
                    text: '告警类型',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['CPU告警','内存告警','磁盘告警','主机告警','MySQL服务器告警']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:15, name:'CPU告警'},
                            {value:31, name:'MySQL服务器告警'},
                            {value:23, name:'磁盘告警'},
                            {value:11, name:'主机告警'},
                            {value:38, name:'内存告警'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }
    }
</script>

<style scoped>
    .chart {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .Col {
        padding: 30px 20px;
    }
</style>