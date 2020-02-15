// components/Tabs/Tabs.js
// 新增组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
    type:Array,
    value:[],
    },
    aaa:{
      type:String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTitle(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
      this.setData({tabs})
      // 这一段不太懂，逻辑还行就是这些函数看不懂 
      //加了{}的赋值叫解构 对复杂类型进行解构时 复制一份变量的引用
    }
  }
})
