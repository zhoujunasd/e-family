<template>
    <div class="bmapcontent" id='bmapcontent'>

    </div>
</template>

<script>
export default {
  name: "bmap",
  methods: {
    initMap() {
      let map = new BMap.Map("bmapcontent");
      this.map = map;
      this.drawPolyline();
      this.addContral();
    },
    drawPolyline() {
      const map = this.map;
      let firstPoint = new BMap.Point(116.404, 39.915);
      let secondPoint = new BMap.Point(110.404, 30.915);
      var endIcon = new BMap.Icon("", new BMap.Size(230, 205), {
        anchor: new BMap.Size(10, 25),
        imageSize: new BMap.Size(23, 25)
      });
      let marker1 = new BMap.Marker(firstPoint);
      let marker2 = new BMap.Marker(secondPoint);
      // 设置图的中心点以及缩放大小
      map.centerAndZoom(firstPoint, 5);
      map.addOverlay(marker1);
      map.addOverlay(marker2);

      var label = new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586", {
        offset: new BMap.Size(20, -10)
      });
      var label1 = new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586", {
        offset: new BMap.Size(20, -10)
      });
      label.setStyle({
        // width:"200px",
        color: "#000",
        background: "#fff",
        border: '1px solid #f00',
        borderRadius: "5px",
        textAlign: "center",
        padding: "1px",
        height: "16px",
        lineHeight: "16px",
        fontSize: "12px",
        Zindex: '80',
      });
      marker1.setLabel(label)
      marker2.setLabel(label1)
    },
    addContral() {
      const map = this.map;
      map.addControl(
        new BMap.NavigationControl({
          anchor: window.BMAP_ANCHOR_TOP_LEFT
        })
      );
      // map.addControl(new BMap.ScaleControl({
      //     anchor:window.BMAP_ANCHOR_TOP_RIGHT
      // }));
      map.addControl(new BMap.GeolocationControl({
          anchor:window.BMAP_ANCHOR_BOTTOM_LEFT
      }));
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style scoped>
.bmapcontent {
  width: 100%;
  height: 12.48rem;
}
</style>