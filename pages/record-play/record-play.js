var voicePath = null;
var playState = null;
function showToast(title) {
    wx.showToast({title});
}
function play(path) {
    if (path) {
        voicePath = path;
        showToast(voicePath);
    }
    if (!path && !voicePath) {
        return showToast('无可播放文件');
    }
    
    playState = true;
    wx.playVoice({
        filePath: voicePath,
        success() {
            showToast('播放成功')
        },
        fail() {
            showToast('无法播放！')
        },
        complete() {
            playState = false;
            showToast('播放结束')
        }
    })
}


Page({
    onReady() {
        this.audioCtx = wx.createAudioContext('my-music');
        this.audioCtx.pause();
        // 播放状态
        this.audioCtx.state = false;
    },
    saveVoice() {
        if (voicePath) {
            wx.saveFile({
                tempFilePath: voicePath,
                success(res) {
                    showToast('已保存至:' + res.savedFilePath);
                },
                fail() {
                    showToast('保存失败失败失败')
                }
            })
        }
        return showToast('没有录音文件')
    },
    record() {
        wx.startRecord({
            success(res) {
                play(res.tempFilePath)
            },
            fail() {
                showToast('录音未成功')
            }
        })
    },
    stopRecord() {
        wx.stopRecord();
    },
    pauseOrPlay() {
        if (playState) {
            wx.pauseVoice();
            showToast('已暂停')
        } else {
            play();
            showToast('继续播放')
        }
        playState = !playState;
    },
    playMusic() {
        this.audioCtx.play();
        this.audioCtx.state = true;
    },
    pauseMusic() {
        this.audioCtx[this.audioCtx.state ? 'pause' : 'play']();
        this.audioCtx.state = !this.audioCtx.state;
    },
    seekOne() {
        this.audioCtx.seek(60);
    },
    seekStart() {
        this.audioCtx.seek(0);
    },
    onShareAppMessage() {
        return {
            title: '录音与音乐播放功能',
            path: "pages/record-play/record-play"
        }
    }
})

