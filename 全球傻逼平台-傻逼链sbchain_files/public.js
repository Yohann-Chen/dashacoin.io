var $header=$("#header");

//处理语言
var headerTips=new Follow({
    parent      : '#header-language-type',
    direction   :  "bottom",
    alignment   : "right"
});

var langVal;

var pageUtility={
    init:function () {
        this.bind();
    },
    bind:function () {
        var self=this;
        //顶部语言切换
        $header.on("click",".j-lang-link",function (e) {
            e.preventDefault();
            langVal=$(this).data("lang");
            self.sendLang();
        });

        $header.on("click",".j-phone-language-trigger",function (e) {
            e.preventDefault();
            langVal=$(this).data("lang");
            self.sendLang();
        });
    },
    sendLang:function () {
        $.ajax({
            url: "/api_changelanguage",
            type: 'POST',
            dataType: "json",
            data: {lang: langVal},
            success: function (data) {
                if (data.success) {
                    window.location.reload();
                } else {
                    // alert("请刷新重试 / Please refresh to try again")
                }
            },
            error: function () {
                // alert("请刷新重试 / Please refresh to try again")
            }
        });
    }
};
pageUtility.init();