// components/album/album.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        albumPrams:{
            skip: 0,
            limit: 3
        },
        imgList: [],
        imgtotal: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getAlbum(){
            wx.request({
                url: 'http://118.190.104.39:3000/album',
                // 定义data
                data: this.data.albumPrams,
                  success: e =>{
                    console.log(e.data.data.list);
                    this.setData({
                        imgList: e.data.data.list,
                        imgtotal:e.data.total
                      })
                  }
              })
        }
    },
    lifetimes: {
        attached(){
            this.getAlbum()
        }
    }
})
