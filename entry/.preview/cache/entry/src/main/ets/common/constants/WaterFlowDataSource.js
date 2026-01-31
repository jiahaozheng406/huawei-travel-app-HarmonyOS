// WaterFlowDataSource.ets
// 实现IDataSource接口的对象，用于瀑布流组件加载数据
export class WaterFlowDataSource {
    constructor() {
        this.dataArray = [];
        this.listeners = [];
        for (let i = 0; i < 100; i++) {
            this.dataArray.push(i);
        }
    }
    // 获取索引对应的数据
    getData(index) {
        return this.dataArray[index];
    }
    // 通知控制器数据重新加载
    notifyDataReload() {
        this.listeners.forEach(listener => {
            listener.onDataReloaded();
        });
    }
    // 通知控制器数据增加
    notifyDataAdd(index) {
        this.listeners.forEach(listener => {
            listener.onDataAdded(index);
        });
    }
    // 通知控制器数据变化
    notifyDataChange(index) {
        this.listeners.forEach(listener => {
            listener.onDataChanged(index);
        });
    }
    // 通知控制器数据删除
    notifyDataDelete(index) {
        this.listeners.forEach(listener => {
            listener.onDataDeleted(index);
        });
    }
    // 通知控制器数据位置变化
    notifyDataMove(from, to) {
        this.listeners.forEach(listener => {
            listener.onDataMoved(from, to);
        });
    }
    // 获取数据总数
    totalCount() {
        return this.dataArray.length;
    }
    // 注册改变数据的控制器
    registerDataChangeListener(listener) {
        if (this.listeners.indexOf(listener) < 0) {
            this.listeners.push(listener);
        }
    }
    // 注销改变数据的控制器
    unregisterDataChangeListener(listener) {
        const pos = this.listeners.indexOf(listener);
        if (pos >= 0) {
            this.listeners.splice(pos, 1);
        }
    }
    // 增加数据
    Add1stItem() {
        this.dataArray.splice(0, 0, this.dataArray.length);
        this.notifyDataAdd(0);
    }
    // 在数据尾部增加一个元素
    AddLastItem() {
        this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length);
        this.notifyDataAdd(this.dataArray.length - 1);
    }
    // 在指定索引位置增加一个元素
    AddItem(index) {
        this.dataArray.splice(index, 0, this.dataArray.length);
        this.notifyDataAdd(index);
    }
    // 删除第一个元素
    Delete1stItem() {
        this.dataArray.splice(0, 1);
        this.notifyDataDelete(0);
    }
    // 删除第二个元素
    Delete2ndItem() {
        this.dataArray.splice(1, 1);
        this.notifyDataDelete(1);
    }
    // 删除最后一个元素
    DeleteLastItem() {
        this.dataArray.splice(-1, 1);
        this.notifyDataDelete(this.dataArray.length);
    }
    // 重新加载数据
    Reload() {
        this.dataArray.splice(1, 1);
        this.dataArray.splice(3, 2);
        this.notifyDataReload();
    }
}
//# sourceMappingURL=WaterFlowDataSource.js.map