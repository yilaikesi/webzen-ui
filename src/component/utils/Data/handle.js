class Query {
    operations;
    data;
    other;
    constructor(data) {
        this.data = data;
        this.operations = [];
        this.other = {};
    }
    /**
     * @des 数据筛选
     * @param callback_function
     * @returns this
     */
    where(data) {
        this.operations.push({
            type: 'where',
            data: {
                callback: data.callback,
            }
        });
        return this;
    }
    /**
     * @des 数据排序
     * @param data
     * @returns this
     */
    sortBy(data) {
        this.operations.push({
            type: 'sortBy',
            data: {
                key: data.key,
                method: data.method,
            }
        });
        return this;
    }
    /**
     * @des 数据分组
     * @param data
     * @returns
     */
    groupBy(data) {
        this.operations.push({
            type: 'groupBy',
            data: {
                key: data.key,
            }
        });
        return this;
    }
    transformBy(data) {
        this.operations.push({
            type: 'transformBy',
            data: {
                key: data
            }
        });
        return this;
    }
    /**
     * @des 分类工具方法
     * @param operation
     * @param data
     * @returns
     */
    #groupByFn(operation, data) {
        const groups = {};
        data.forEach((item) => {
            const groupKey = item[operation.data.key];
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(item);
        });
        data = Object.values(groups);
        return data;
    }
    /**
    * @des 排序工具方法
    * @param operation
    * @param data
    * @returns
    */
    #sortByFn(operation, data) {
        if (operation.data.method === 'asc') {
            data = data.sort((a, b) => {
                return Number(a[operation.data.key]) - Number(b[operation.data.key]);
            });
        }
        else {
            data = data.sort((a, b) => {
                return Number(b[operation.data.key]) - Number(a[operation.data.key]);
            });
        }
        return data;
    }
    /**
     * @des 数据执行
     * @returns
     */
    execute() {
        let result = [...this.data];
        this.operations.forEach((operation) => {
            if (operation.type === 'where') {
                result = result.filter(operation.data.callback);
            }
            if (operation.type === 'sortBy') {
                result = this.#sortByFn(operation, result);
            }
            if (operation.type === 'groupBy') {
                result = this.#groupByFn(operation, result);
            }
            // 数据key 转化
            if (operation.type === 'transformBy') {
                let origin = operation.data.key.originKey;
                let target = operation.data.key.targetKey;
                let cureArr = [];
                let res = result.map((value) => {
                    let cureItemArr = {};
                    for (let i = 0; i < origin.length; i++) {
                        // target[i] 是 key 
                        value[target[i]] = value[origin[i]];
                        cureItemArr[target[i]] = value[origin[i]];
                    }
                    cureArr.push(cureItemArr);
                    return value;
                });
                result = res;
                this.other["pureArr"] = cureArr;
            }
        });
        return {
            code: 200,
            result: result,
            other: this.other
        };
    }
}
// 排序示例
// let data = [{id:1,name:"第一个数据"},{id:2,name:"第二个数据"},{id:1,children:{id:3}}]
// let instance1 = new Query(data).sortBy({key:"id",method:"desc"}).execute()
// console.log(instance1)
// // 筛选示例
// let fliterUtil =(item:any) => {
//     return item.id>1;
// }
// let instance2 = new Query(data).where({callback:fliterUtil}).execute()
// console.log(instance2)
// // 分组示例
// let instance3 = new Query(data).groupBy({key:"id"}).execute()
// console.log(instance3)
// // 属性转化示例
// let instance4 = new Query(data).transformBy({originKey:["id","name"],targetKey:["test","mt"]}).execute()
// console.log(JSON.stringify(instance4,null,2))
export { Query };
