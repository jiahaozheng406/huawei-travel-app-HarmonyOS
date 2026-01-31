/**
 * Activity?
 * UIAbility是一种包含用户界面的应用组件，主要用于和用户进行交互。
 * UIAbility也是系统调度的单元，为应用提供窗口在其中绘制界面。
 * 每一个UIAbility实例，都对应于一个最近任务列表中的任务。
 * 一个应用可以有一个UIAbility，也可以有多个UIAbility
 * 一个UIAbility可以对应于多个页面，建议将一个独立的功能模块放到一个UIAbility中，以多页面的形式呈现。
 */
import hilog from '@ohos.hilog';
import Ability from '@ohos.app.ability.UIAbility';
import Window from '@ohos.window';
import common from '@ohos.app.ability.common';
import systemDateTime from '@ohos.systemDateTime';
import geoLocationManager from '@ohos.geoLocationManager';
import abilityAccessCtrl from '@ohos.abilityAccessCtrl';

/**
 * Lift cycle management of Ability.
 */
export default class entryAbility extends Ability {
  onCreate(want, launchParam) {
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    hilog.info(0x0000, 'testTag', '%{public}s', 'want param:' + JSON.stringify(want) ?? '');
    hilog.info(0x0000, 'testTag', '%{public}s', 'launchParam:' + JSON.stringify(launchParam) ?? '');
  }

  onDestroy() {
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: Window.WindowStage) {
    // 可配置主page
    // Main window is created, set main page for this ability
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');


    // 当加载该组件时, 访问系统时间, 设置start时间
    let start = '2025-10-18'
    try {
      // 鸿蒙时间服务
      systemDateTime.getDate().then((date) => {
        // 根据毫秒数构建 Date 对象
        // var date = new Date(time);
        // let date = dateUtils.timestampToTime(time)
        console.log('malred log!!!: ', date)
        // 设置初始日期
        start = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        console.log('malred log!!!: ', start)

        // 存入全局状态
        // AppStorage.Set('start', new Date(start));
        AppStorage.SetOrCreate<string>('start', start);
        hilog.info(0x0000, 'testTag', '%{public}s', 'AppStorage.SetOrCreate' + start);
        console.log('malred log!!!: ' + AppStorage.Get<String>('start'));
      }).catch((error) => {
        console.info(`Failed to get currentTime. message:${error.message}, code:${error.code}`);
      });
    } catch (e) {
      console.info(`Failed to get currentTime. message:${e.message}, code:${e.code}`);
    }

    // 权限
    // todo: 无法弹窗申请权限
    let atManager = abilityAccessCtrl.createAtManager();
    try {
      atManager.requestPermissionsFromUser(this.context,
        [
          "ohos.permission.LOCATION",
          "ohos.permission.LOCATION_IN_BACKGROUND",
          "ohos.permission.APPROXIMATELY_LOCATION",
        ], (err, data) => {
          console.info("data:" + JSON.stringify(data));
          console.info("data permissions:" + data.permissions);
          console.info("data authResults:" + data.authResults);
        });
    } catch (err) {
      console.log(`catch err->${JSON.stringify(err)}`);
    }

    // 授权成功
    // 获取位置
    try {
      let location = geoLocationManager.getLastLocation();
      console.log("malred log!!!: " + location)
    } catch (err) {
      console.error("errCode:" + err.code + ",errMessage:" + err.message);
    }

    // 加载login page
    // windowStage.loadContent('pages/LoginPage', (err, data) => {
    windowStage.loadContent('pages/SplashPage', (err, data) => {
      if (err.code) {
        hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.ERROR);
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    // Ability has back to background
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}

function getContext(arg0: any): any {
  throw new Error('Function not implemented.');
}
