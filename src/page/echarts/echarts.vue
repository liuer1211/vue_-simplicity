<template>
  <div class="echarts-main">
    <div class="ech-model-1">
      <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="ech-model-1 map">
      <div id='chart' :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="ech-model-1">
      <div id="myChart1" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="ech-model-1">
      <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="ech-model-1">
      <div id="myChart3" :style="{width: '100%', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    mounted() {
      // 柱状图
      this.drawLine()
      // 地图
      this.drawChart()
      // 折线图
      this.drawLine1()
      // 饼状图
      this.drawLine2()
      // 漏斗图
      this.drawLine3()
    },
    methods:{
      // 柱状图
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      // 地图
      drawChart () {
        let that = this
        // 基于准备好的dom，初始化echarts实例
        let chart = this.$echarts.init(document.getElementById('chart'))
        // 监听屏幕变化自动缩放图表
        window.addEventListener('resize', function () {
          chart.resize()
        })
        // 绑定事件处理函数
        chart.on('click', function (res) {
          // 跳转到省市地图
          // that.$router.push({ path: '/provincechart', query: { cityName: res.data.name } })
        })
        // 绘制图表
        chart.setOption({
          // 图表主标题
          title: {
            text: '全国各省人口', // 主标题文本，支持使用 \n 换行
            top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            left: 'center', // 值: 'left', 'center', 'right' 同上
            textStyle: { // 文本样式
              fontSize: 24,
              fontWeight: 600,
              color: '#fff'
            }
          },
          // 提示框组件
          tooltip: {
            trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
            // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
            // 使用函数模板  传入的数据值 -> value: number | Array
            formatter: function (val) {
              if (val.data.value < 10000) {
                return val.data.name + '<br>人口数量: ' + val.data.value + '万'
              } else {
                return val.data.name + '<br>人口数量: ' + (val.data.value / 10000).toFixed(2) + '亿'
              }
            }
          },
          // 视觉映射组件
          visualMap: {
            type: 'continuous', // continuous 类型为连续型  piecewise 类型为分段型
            show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
            // 指定 visualMapContinuous 组件的允许的最小/大值。'min'/'max' 必须用户指定。
            // [visualMap.min, visualMax.max] 形成了视觉映射的『定义域』
            min: 0,
            max: 11300,
            // 文本样式
            textStyle: {
              fontSize: 14,
              color: '#fff'
            },
            realtime: false, // 拖拽时，是否实时更新
            calculable: true, // 是否显示拖拽用的手柄
            // 定义 在选中范围中 的视觉元素
            inRange: {
              color: ['#9fb5ea', '#e6ac53', '#74e2ca', '#85daef', '#9feaa5', '#5475f5'] // 图元的颜色
            }
          },
          series: [
            {
              type: 'map', // 类型
              // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
              name: '中国',
              mapType: 'china', // 地图类型
              // 是否开启鼠标缩放和平移漫游 默认不开启
              // 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
              roam: false,
              // 图形上的文本标签
              label: {
                show: false // 是否显示对应地名
              },
              // 地图区域的多边形 图形样式
              itemStyle: {
                areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                borderWidth: 0.5, // 描边线宽 为 0 时无描边
                borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
              },
              // 高亮状态下的多边形和标签样式
              emphasis: {
                label: {
                  show: true, // 是否显示标签
                  color: '#fff' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                },
                itemStyle: {
                  areaColor: '#FF6347' // 地图区域的颜色
                }
              },
              // 地图系列中的数据内容数组 数组项可以为单个数值
              data: [
                { name: '北京', value: 2154, lng: 116.405285, lat: 39.904989 },
                { name: '天津', value: 1560, lng: 117.190182, lat: 39.125596 },
                { name: '上海', value: 2424, lng: 121.472644, lat: 31.231706 },
                { name: '重庆', value: 3102, lng: 106.504962, lat: 29.533155 },
                { name: '河北', value: 7556, lng: 114.502461, lat: 38.045474 },
                { name: '河南', value: 9605, lng: 113.665412, lat: 34.757975 },
                { name: '云南', value: 4830, lng: 102.712251, lat: 25.040609 },
                { name: '辽宁', value: 4359, lng: 123.429096, lat: 41.796767 },
                { name: '黑龙江', value: 3773, lng: 126.642464, lat: 45.756967 },
                { name: '湖南', value: 6899, lng: 112.982279, lat: 28.19409 },
                { name: '安徽', value: 6324, lng: 117.283042, lat: 31.86119 },
                { name: '山东', value: 10000, lng: 117.000923, lat: 36.675807 },
                { name: '新疆', value: 2487, lng: 87.617733, lat: 43.792818 },
                { name: '江苏', value: 8051, lng: 118.767413, lat: 32.041544 },
                { name: '浙江', value: 5737, lng: 120.153576, lat: 30.287459 },
                { name: '江西', value: 4648, lng: 115.892151, lat: 28.676493 },
                { name: '湖北', value: 5917, lng: 114.298572, lat: 30.584355 },
                { name: '广西', value: 4926, lng: 108.320004, lat: 22.82402 },
                { name: '甘肃', value: 2637, lng: 103.823557, lat: 36.058039 },
                { name: '山西', value: 3718, lng: 112.549248, lat: 37.857014 },
                { name: '内蒙古', value: 2534, lng: 111.670801, lat: 40.818311 },
                { name: '陕西', value: 3864, lng: 108.948024, lat: 34.263161 },
                { name: '吉林', value: 2704, lng: 125.3245, lat: 43.886841 },
                { name: '福建', value: 3941, lng: 119.306239, lat: 26.075302 },
                { name: '贵州', value: 3600, lng: 106.713478, lat: 26.578343 },
                { name: '广东', value: 11300, lng: 113.280637, lat: 23.125178 },
                { name: '青海', value: 603, lng: 101.778916, lat: 36.623178 },
                { name: '西藏', value: 344, lng: 91.132212, lat: 29.660361 },
                { name: '四川', value: 8341, lng: 104.065735, lat: 30.659462 },
                { name: '宁夏', value: 688, lng: 106.278179, lat: 38.46637 },
                { name: '海南', value: 934, lng: 110.33119, lat: 20.031971 },
                { name: '台湾', value: 2358, lng: 121.509062, lat: 25.044332 },
                { name: '香港', value: 745, lng: 114.173355, lat: 22.320048 },
                { name: '澳门', value: 63, lng: 113.54909, lat: 22.198951 },
                { name: '南海诸岛', value: 271.13, lng: 114.252615, lat: 15.86029 }
              ]
            }
          ]
        })
        // 定时显示提示框和高亮效果
       /* let index = -1
        setInterval(function () {
          // 隐藏提示框
          chart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
          })
          // 显示提示框
          chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index + 1
          })
          // 取消高亮指定的数据图形
          chart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          })
          // 高亮指定的数据图形
          chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1
          })
          index++
          if (index > 34) {
            index = -1
          }
        }, 2000)*/
      },
      // 折线图
      drawLine1(){
        // 数据
        let option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          //工具箱
          //保存图片
          toolbox: {
            show:false,
            feature: {
              saveAsImage: {}
            }
          },
          //x轴
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          //y轴没有显式设置，根据值自动生成y轴
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption(option)
      },
      // 饼状图
      drawLine2() {
        let option = {
          title: {
            text: '',
            subtext: '',
            left: ''
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption(option)
      },
      // 漏斗图
      drawLine3() {
        let option = {
          title: {
            text: '',
            subtext: ''
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            show:false,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['展现','点击','访问','咨询','订单']
          },

          series: [
            {
              name:'漏斗图',
              type:'funnel',
              left: '10%',
              top: 60,
              //x2: 80,
              bottom: 60,
              width: '80%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
              ]
            }
          ]
        };
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  .echarts-main{
    display: flex;
    flex-direction: column;
    .ech-model-1{
      background: #beb5ae;
      margin: 0.5rem;
      box-sizing: border-box;
      &.map{
        background: #5f5f5f;
      }
    }
  }
</style>
