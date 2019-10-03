AFRAME.registerComponent("camera-detect", {
  schema: {},
  init() {
    this.camera = document.querySelector("[camera]");
  },
  tick() {
    let cameraPosition = this.camera.object3D.position;
    console.log(cameraPosition);
  }
});
