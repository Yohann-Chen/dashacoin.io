var $page=$("#cnc-index");
var $item=$page.find(".j-team-item");
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var pageUtility={
    init:function () {
        this.bind();
    },
    bind:function () {
        //team pc :hover
        $item.hover(function () {
            var $this=$(this);
            // console.log("IsPC:",!isMobile.phone);
            if(!(isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch)){
                $this.find(".member-avatar").fadeToggle(200);
                // $this.find(".member-medal").fadeToggle(200);
                $this.find(".member-info").fadeToggle(200);
                $this.find(".j-member-detail").fadeToggle(200);
                $this.find(".j-member-detail .member-name").show();
            }



        });

        //mobel click
        $item.on("click",function (e) {
            e.preventDefault();
            var $this=$(this);
            // console.log("IsPhone:",isMobile.phone);
            if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
                $this.find(".j-down-arrow-wrap").fadeToggle(0);
                $this.find(".j-member-detail").fadeToggle(200);
                $page.find(".j-member-detail .member-name").hide();
            }
        });
    }
};
pageUtility.init();
