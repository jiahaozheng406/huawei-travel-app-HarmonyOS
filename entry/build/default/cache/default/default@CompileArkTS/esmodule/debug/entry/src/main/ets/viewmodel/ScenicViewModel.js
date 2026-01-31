// 给路线规划页面提供数据和操作方法
export class ScenicViewModel {
    /**
     * 获取路径规划
     * @param cur_idx 当前算法索引(时间最短|路径最短|最多人走)
     * @returns
     */
    getLocations(cur_idx) {
        switch (cur_idx) {
            case 0:
                return [
                    new card_data({ "id": 16777458, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "沙坡尾艺术西街"),
                    new card_data({ "id": 16777444, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "南普陀寺"),
                    new card_data({ "id": 16777464, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "厦门大学"),
                    new card_data({ "id": 16777461, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "白城沙滩"),
                    new card_data({ "id": 16777406, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "厦门园林植物园"),
                ];
            case 1:
                return [
                    new card_data({ "id": 16777458, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "沙坡尾艺术西街"),
                    new card_data({ "id": 16777444, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xxx1"),
                    new card_data({ "id": 16777464, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "厦门大学"),
                    new card_data({ "id": 16777461, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "白城沙滩"),
                    new card_data({ "id": 16777406, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xxx植物园"),
                ];
            case 2:
                return [
                    new card_data({ "id": 16777458, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "沙坡尾艺术西街"),
                    new card_data({ "id": 16777444, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xxx1"),
                    new card_data({ "id": 16777464, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xx大学"),
                    new card_data({ "id": 16777461, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xx沙滩"),
                    new card_data({ "id": 16777406, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xxx植物园"),
                ];
            case 3:
                return [
                    new card_data({ "id": 16777458, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "沙坡尾艺术西街2121"),
                    new card_data({ "id": 16777444, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "sdfasdfer"),
                    new card_data({ "id": 16777464, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xx大学"),
                    new card_data({ "id": 16777461, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xx沙滩"),
                    new card_data({ "id": 16777406, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, "xxx植物园"),
                ];
            default:
                break;
        }
    }
}
export class card_data {
    constructor(icon, name) {
        this.icon = icon;
        this.name = name;
    }
}
export default new ScenicViewModel();
//# sourceMappingURL=ScenicViewModel.js.map