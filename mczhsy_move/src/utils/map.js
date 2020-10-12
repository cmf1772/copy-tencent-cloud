/***
 *  IP 定位不准确
 *  修改为高德地图定位
 * 
 */

// const map = {
//   init: function() {
//     const AK = "iUNEvDiL3HXIdZpq5MGFMI4eY7HQG4jl";
//     const BMap_URL = 'http://api.map.baidu.com/api?v=2.0&ak=' + AK +'&s=1&callback=onBMapCallback';
//     return new Promise((resolve, reject) => {
//       // 如果已加载直接返回
//       if (typeof BMap !== "undefined") {
//         resolve(BMap);
//         return true;
//       }
//       // 百度地图异步加载回调处理
//       window.onBMapCallback = function() {
//         resolve(BMap);
//       };
//       let getCurrentCityName = function() {
//         return new Promise(function(resolve, reject) {
//           let myCity = new BMap.LocalCity();
//           myCity.get(function(result) {
//             resolve(result.name);
//           });
//         });
//       };
//     });
//   }
// };
// export default map
