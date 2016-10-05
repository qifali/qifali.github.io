/**
 * Created by Zach on 16/10/5.
 */
// 基于准备好的dom，初始化echarts实例
var techSkills = echarts.init(document.getElementById('techSkills'));

option = {
    title: {
        text: "Tech Skills",
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
//                    orient: 'vertical',
//                    x: 'right',
//                    data: ['Portal', 'J2EE', 'Front End', 'Mobile', 'Oracle Webcenter Portal', 'Liferay Portal', 'Oracle Webcenter Content'
//                        , 'Spring boot', 'Spring cloud', 'Yeoman/gulp', 'Angular2/Jquery', 'Bootstrap/SASS/LESS', 'NativeScript'
//                        , 'Cordova/ionic'],
//                    textStyle: {
//                        color: "#fff"
//                    }
//                    right:"10%",
//                    left:"10%"
    },
    series: [
        {
            name: 'Tech Skills',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 40, name: 'Portal', selected: true},
                {value: 30, name: 'J2EE'},
                {value: 20, name: 'Front End'},
                {value: 10, name: 'Mobile'}
            ]
        },
        {
            name: 'Tech Skills',
            type: 'pie',
            radius: ['40%', '55%'],

            data: [
                {value: 10, name: 'Oracle Webcenter Portal'},
                {value: 20, name: 'Liferay Portal'},
                {value: 10, name: 'Oracle Webcenter Content'},
                {value: 25, name: 'Spring boot'},
                {value: 5, name: 'Spring cloud'},
                {value: 10, name: 'Yeoman/gulp'},
                {value: 5, name: 'Angular2/Jquery'},
                {value: 5, name: 'Bootstrap/SASS/LESS'},
                {value: 5, name: 'NativeScript'},
                {value: 5, name: 'Cordova/ionic'}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
techSkills.setOption(option);