export default {
  async cameraOn(state) {
    try {
      state.videoElement = document.getElementById('video');
      state.textElement = document.getElementById('text-area');
      state.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      state.videoElement.srcObject = state.localStream;
      state.cameraIsOn = true;
      state.accessDenied = false;
    } catch (error) {
      console.log(error);
      if (error) {
        state.accessDenied = true;
      }
    }
  },
  cameraOff(state) {
    state.videoElement = null;
    state.textElement = null;
    state.receivedObject = {};
    state.cameraIsOn = false;
    state.localStream.getTracks().forEach(track => track.stop());
  },
  async createCanvas(state) {
    try {
      if (state.cameraIsOn) {
        state.canvasImage = document.createElement('canvas');
        state.canvasImage.width = 560;
        state.canvasImage.height = 420;
        state.canvasImage
          .getContext('2d')
          .drawImage(state.videoElement, 0, 0, 560, 420);

        await state.worker.load();
        await state.worker.loadLanguage('eng');
        await state.worker.initialize('eng');

        state.receivedObject = await state.worker.recognize(state.canvasImage);
        state.textElement.textContent = state.receivedObject.data.text;
        speechSynthesis.speak(
          new SpeechSynthesisUtterance(
            state.textElement.textContent.replace(/\s/g, ' ')
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
};
