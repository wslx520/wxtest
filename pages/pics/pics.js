var mode = 'scaleToFill';
Page({
    data: {
        pics: [],
        picUrls: [],
        mode
    },
    previewPics: function (event) {
        console.log(event, event.target.dataset);
        var index = event.target.dataset.index
        wx.previewImage({
            current: this.data.picUrls[index],
            urls: this.data.picUrls
        })
    },
    choosePics: function (event) {
        console.log(event);
        var self = this;
        wx.chooseImage({
            count: 6,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempPaths = res.tempFilePaths;
                console.log(res,tempPaths);
                self.setData({
                    picUrls: tempPaths,
                    pics: tempPaths.map( (p) => {
                        return {
                            src: p
                        }
                    })
                })
            }
        })
    },
    clip() {
        mode = mode === 'scaleToFill' ? 'aspectFill' : 'scaleToFill';
        this.setData({
            mode
        })
    },
    formSubmit(e) {
        console.log(e.detail.value);
        wx.showLoading();
        setTimeout(function () {
            wx.showModal({
                title: '你提交的数据是',
                content: JSON.stringify(e.detail.value)
            })
            wx.hideLoading();
        }, 1000);
        
    }
})