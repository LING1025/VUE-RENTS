
/* const orgOption = [
  { key: 1, display_name: '运务课' },
  { key: 2, display_name: '上海区' },
  { key: 3, display_name: '上海营业部' },
  { key: 4, display_name: '上海营业部一课' },
  { key: 5, display_name: '上海营业部二课' },
  { key: 6, display_name: '上海营业部三课' },
  { key: 7, display_name: '上海营业部四课' },
  { key: 8, display_name: '上海短租部' },
  { key: 9, display_name: '山东区' },
  { key: 10, display_name: '广东区' },
  { key: 11, display_name: '中山营业部' },
  { key: 12, display_name: '中山营业部一课' },
  { key: 13, display_name: '开发课' },
  { key: 14, display_name: '车技上海课' },
  { key: 15, display_name: '车技苏州课' },
  { key: 16, display_name: '车技昆山课' },
  { key: 17, display_name: '车技课' },
  { key: 18, display_name: '车辆服务课' },
  { key: 19, display_name: '车辆部' },
  { key: 20, display_name: '车辆管理课' },
  { key: 21, display_name: '长沙营业部' },
  { key: 22, display_name: '业务处' },
  { key: 23, display_name: '业务部' },
  { key: 24, display_name: '业管处' },
  { key: 25, display_name: '东莞营业一部' },
  { key: 26, display_name: '东莞营业一部一课' },
  { key: 27, display_name: '东莞营业一部二课' },
  { key: 28, display_name: '东莞营业一部三课（回租）' },
  { key: 29, display_name: '东莞营业二部' },
  { key: 30, display_name: '东莞营业二部一课' },
  { key: 31, display_name: '东莞营业二部专案课' },
  { key: 32, display_name: '企划管理处' },
  { key: 33, display_name: '会计课' },
  { key: 34, display_name: '全公司' },
  { key: 35, display_name: '华东营业处' },
  { key: 36, display_name: '华东营业处联办中心' },
  { key: 37, display_name: '华东短租营业处' },
  { key: 38, display_name: '华南区作业管理中心' },
  { key: 39, display_name: '华南营业处' },
  { key: 40, display_name: '合肥营业部' },
  { key: 41, display_name: '回租部' },
  { key: 42, display_name: '回租部一课（苏州）' },
  { key: 43, display_name: '回租部二课（上海）' },
  { key: 44, display_name: '安徽区' },
  { key: 45, display_name: '行政课' },
  { key: 46, display_name: '行政管理中心' },
  { key: 47, display_name: '行销企划课' },
  { key: 48, display_name: '佛山营业部' },
  { key: 49, display_name: '佛山营业部一课' },
  { key: 50, display_name: '苏州二手车课' },
  { key: 51, display_name: '苏州区' },
  { key: 52, display_name: '苏州营业一部' },
  { key: 53, display_name: '苏州营业一部一课' },
  { key: 54, display_name: '苏州营业一部二课' },
  { key: 55, display_name: '苏州营业一部三课' },
  { key: 56, display_name: '苏州营业一部长沙课' },
  { key: 57, display_name: '苏州营业一部南京课' },
  { key: 58, display_name: '苏州营业二部' },
  { key: 59, display_name: '苏州营业二部一课' },
  { key: 60, display_name: '苏州营业二部二课' },
  { key: 61, display_name: '苏州营业二部二课（原无锡）' },
  { key: 62, display_name: '苏州营业二部合肥课' },
  { key: 63, display_name: '苏州营业二部南昌课' },
  { key: 64, display_name: '苏州营业三部' },
  { key: 65, display_name: '苏州营业三部一课' },
  { key: 66, display_name: '苏州营业三部二课（网约车）' },
  { key: 67, display_name: '苏州营业三部三课（代理商）' },
  { key: 68, display_name: '苏州营业三部三课（原扬州）' },
  { key: 69, display_name: '苏州营业四部' },
  { key: 70, display_name: '苏州营业四部二课（网约车）' },
  { key: 71, display_name: '苏州营业四部三课（代理商）' },
  { key: 72, display_name: '苏州短租部' },
  { key: 73, display_name: '财务部会计课' },
  { key: 74, display_name: '财务部理财课' },
  { key: 75, display_name: '财务管理中心' },
  { key: 76, display_name: '昆山区' },
  { key: 77, display_name: '昆山营业二部' },
  { key: 78, display_name: '昆山营业二部一课' },
  { key: 79, display_name: '昆山营业二部三课' },
  { key: 80, display_name: '昆山营业部' },
  { key: 81, display_name: '昆山营业部一课' },
  { key: 82, display_name: '昆山营业部二课' },
  { key: 83, display_name: '昆山营业部三课' },
  { key: 84, display_name: '昆山营业部五课（回租）' },
  { key: 85, display_name: '昆山营业部四课（南通）' },
  { key: 86, display_name: '服务部' },
  { key: 87, display_name: '杭州企划部' },
  { key: 88, display_name: '杭州财管部' },
  { key: 89, display_name: '杭州资讯部' },
  { key: 90, display_name: '杭州营业部' },
  { key: 91, display_name: '杭州营业部一课（杭州）' },
  { key: 92, display_name: '杭州营业部二课（宁波）' },
  { key: 93, display_name: '杭州营业部三课（嘉兴）' },
  { key: 94, display_name: '杭州营服部' },
  { key: 95, display_name: '杭州新事业室' },
  { key: 96, display_name: '经企管理中心' },
  { key: 97, display_name: '经营企划课' },
  { key: 98, display_name: '青岛营业部' },
  { key: 99, display_name: '青岛营业部一课' },
  { key: 100, display_name: '南京区' },
  { key: 101, display_name: '南京营业部' },
  { key: 102, display_name: '南昌营业部' },
  { key: 103, display_name: '契约管理课' },
  { key: 104, display_name: '总经理室' },
  { key: 105, display_name: '债权管理课' },
  { key: 106, display_name: '债管课' },
  { key: 107, display_name: '浙江区' },
  { key: 108, display_name: '授信管理课' },
  { key: 109, display_name: '深圳营业部' },
  { key: 110, display_name: '深圳营业部一课' },
  { key: 111, display_name: '维护课' },
  { key: 112, display_name: '营服部' },
  { key: 113, display_name: '营管部' },
  { key: 114, display_name: '厦门营业部' },
  { key: 115, display_name: '厦门营业部一课' },
  { key: 116, display_name: '惠州营业部' },
  { key: 117, display_name: '惠州营业部一课' },
  { key: 118, display_name: '董事長室' },
  { key: 119, display_name: '数据管理中心' },
  { key: 120, display_name: '福州营业部' },
  { key: 121, display_name: '福州营业部一课' },
  { key: 122, display_name: '福建区' },
  { key: 123, display_name: '解约管理课' },
  { key: 124, display_name: '管理处' },
  { key: 125, display_name: '管理部人事课' },
  { key: 126, display_name: '管理部行政课' },
  { key: 127, display_name: '稽核室' }
]*/

const titleOption = [
  { key: 1, display_name: '董事长' },
  { key: 2, display_name: '总经理' },
  { key: 3, display_name: '副总经理' },
  { key: 4, display_name: '总监' },
  { key: 5, display_name: '协理' },
  { key: 6, display_name: '经理' },
  { key: 7, display_name: '副理' },
  { key: 8, display_name: '襄理' },
  { key: 9, display_name: '主任' },
  { key: 10, display_name: '组长' },
  { key: 11, display_name: '专员' },
  { key: 12, display_name: '业务员' },
  { key: 13, display_name: '助理' },
  { key: 14, display_name: '司机' }
]

/* const groupOption = [
  { key: 1, display_name: '上海浦东长租部' },
  { key: 2, display_name: '上海浦西长租部' },
  { key: 3, display_name: '上海营业1课' },
  { key: 4, display_name: '上海营业4课' },
  { key: 5, display_name: '上海張揚站' },
  { key: 6, display_name: '上海短租部' },
  { key: 7, display_name: '上海管理部' },
  { key: 8, display_name: '广州营业1课' },
  { key: 9, display_name: '广州营业部' },
  { key: 10, display_name: '东莞营业部一课' }
]*/

/* const roleOption = [
  { key: 1, display_name: 'Admins', checked: false },
  { key: 2, display_name: 'GPS信息维护', checked: false },
  { key: 3, display_name: 'GPS暂借审核', checked: false },
  { key: 4, display_name: '人事', checked: false },
  { key: 5, display_name: '入车复核', checked: false },
  { key: 6, display_name: '厂商维护', checked: false },
  { key: 7, display_name: '上海业务员', checked: false },
  { key: 8, display_name: '上海总经理', checked: false },
  { key: 9, display_name: '上海营业区经理', checked: false },
  { key: 10, display_name: '上海营业课组长', checked: false }
]*/

export default {
  // orgOption,
  titleOption
  // groupOption
  // roleOption
}
