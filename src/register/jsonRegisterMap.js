import axios from "axios";
import echarts from "vue-echarts-v3/src/full.js";
// 采用异步的方式注册json地图
const jsonMap = {
  china: "static/map/china.json",
  chinacity: "static/map/china-cities.json",
  cj_citylevel: "static/map/changjiang_city_level.json",
  cj_up_mid_down: "static/map/changjiang_up_mid_down.json",
  cj_provincial: "static/map/changjiang_provincial.json",
  ningxiacity: "static/map/Ningxia.json"
};

for (const i in jsonMap) {
  if (Object.prototype.hasOwnProperty.call(jsonMap, i)) {
    axios.get(jsonMap[i]).then(res => {
      echarts.registerMap(i, res.data);
    });
  }
}
