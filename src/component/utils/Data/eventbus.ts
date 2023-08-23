class eventBus {
    eventBus:{
        [key:string]:any
    }
    constructor() {
        this.eventBus = {
      
        }
    }
    /**
     * @des 绑定单一事件
     * @param name 事件名称
     * @param event function来的
     * @return void
     */
    on = (name:string, event:Function) => {
        this.eventBus[name]=[event]
    };

    /**
     * @des 触发某一个事件
     * @param name 
     * @param data 给function的值
     */
    emit = (name:string, data:any) => {
        // 判断
        if (this.eventBus[name] ) {
            this.eventBus[name].forEach((element:Function) => {
                element(data)
            });
        }else{
            throw new Error("没有这个事件")
        }
    }

    /**
     * @des 解绑事件
     * @param eventName 
     */
    off = (eventName:string) => {
        if (this.eventBus.hasOwnProperty(eventName)) {
            delete this.eventBus[eventName];
        } else {
            this.eventBus[eventName] = null;
        }
    }
    add = (name:string, event:Function) => {
        if(!this.eventBus[name]){
            this.eventBus[name] = []
        }
        if(this.eventBus[name].length){
            this.eventBus[name].push(event)
        }else{
            this.eventBus[name] = [event]
        }
        
    };
}

// let eventbus1 = new eventBus()
// let test1 = (param:string)=>{
//     console.log("这是test1:",param)
// }
// let test2 = (param:string)=>{
//     console.log("这是test2:",param)
// }

// eventbus1.on("test",test1)
// eventbus1.add("test",test2)
// eventbus1.emit("test","我是参数")


export default new eventBus()


