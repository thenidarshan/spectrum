// @flow
class WebPushManager {
  pushManager = null;

  set(pushManager) {
    this.pushManager = pushManager;
  }

  get() {
    return this.pushManager;
  }
}

export default new WebPushManager();