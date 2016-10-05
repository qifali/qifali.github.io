/**
 * Created by Zach on 16/10/5.
 */
// 基于准备好的dom，初始化echarts实例
var commonSkills = echarts.init(document.getElementById('commonSkills'));

option = {
    title: {
        show: false,
        text: "Common Skills",
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {},
    legend: {
//                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        show: false
    },
    radar: {
        // shape: 'circle',
        indicator: [
            {name: '快速学习', max: 10},
            {name: '编码能力', max: 10},
            {name: '系统设计', max: 10},
            {name: '数据结构与算法', max: 10},
            {name: '沟通演示', max: 10},
            {name: '分析能力', max: 10},
            {name: '解决问题', max: 10}
        ]
    },
    series: [{
        name: 'Common Skills',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [9, 8, 8, 5, 7, 7, 8],
                name: 'Common Skills'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
commonSkills.setOption(option);