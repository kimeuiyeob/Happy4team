let check2 = false;

/* 찜하기 버튼 마우스 올렸을 때*/
$("button.zzimButton").mouseover(function () {
    if(!sessionId){
        return;
    }
    $(this).css({"background-color": "rgb(102 102 102 / 29%)"})
    $(this).css({"border-radius": "3px"})
    $(this).css({"transition": "all .2s ease"})
})
$("button.zzimButton").mouseout(function () {
    $(this).css({"background-color": "transparent"})
    $(this).css({"border-radius": "3px"})
    $(this).css({"transition": "all .2s ease"})
})

$(".redHeart").css({"display": "none"})

/* 찜하기 버튼 클릭 */
$(".zzimButton").click(function () {
    if(!sessionId){
        return;
    }
    if (!check2) {
        $(this).children(".redHeart").css({"display": "inline"})
        $(this).children(".emptyHeart").css({"display": "none"})
        check2 = true;
        likeSchool($('.userId').val(),showLikeCount)
    } else {
        $(this).children(".redHeart").css({"display": "none"})
        $(this).children(".emptyHeart").css({"display": "inline"})
        check2 = false;
        cancelLikeSchool($('.userId').val(),showLikeCount)
    }
})

/* 기부하기 버튼 마우스 올렸을 때 */
$("button#donate").mouseover(function () {
    $(this).css({"background-color": "#eac405"})
    $(this).css({"transition": "all .2s ease"})
})
$("button#donate").mouseout(function () {
    $(this).css({"background-color": "#ffd400"})
    $(this).css({"transition": "all .2s ease"})
})

/* 더보기 버튼 마우스 올렸을 때 */
$("button.moreButton").mouseover(function () {
    $(this).css({"background-color": "rgb(237 237 237)"})
    $(this).css({"transition": "all .2s ease"})
})
$("button.moreButton").mouseout(function () {
    $(this).css({"background-color": "transparent"})
    $(this).css({"transition": "all .2s ease"})
})

/* 우측 어사이드 바 클릭 */
$(".intro").click(function () {
    $("#introRightBox").css({"display": "block"})

    $("#pseudo").css({"transform": "translateX(0%)"})
    $(this).css({"color": "rgb(48, 52, 65)"})
    $(this).css({"font-weight": "700"})
    $(".total").css({"font-weight": "normal"})
    $(".total").css({"color": "rgb(154, 155, 167)"})
    $(".ranking").css({"font-weight": "normal"})
    $(".ranking").css({"color": "rgb(154, 155, 167)"})

    $("#totalRightBox").css({"display": "none"})
    $("#rankingRightBox").css({"display": "none"})
})

/* 우측 어사이드 바 클릭 */
$(".total").click(function () {
    $("#totalRightBox").css({"display": "block"})

    $("#pseudo").css({"transform": "translateX(100%)"})
    $(this).css({"color": "rgb(48, 52, 65)"})
    $(this).css({"font-weight": "700"})
    $(".intro").css({"font-weight": "normal"})
    $(".intro").css({"color": "rgb(154, 155, 167)"})
    $(".ranking").css({"font-weight": "normal"})
    $(".ranking").css({"color": "rgb(154, 155, 167)"})

    $("#introRightBox").css({"display": "none"})
    $("#rankingRightBox").css({"display": "none"})
})

/* 우측 어사이드 바 클릭 */
$(".ranking").click(function () {
    $("#rankingRightBox").css({"display": "block"})

    $("#pseudo").css({"transform": "translateX(200%)"})
    $(this).css({"color": "rgb(48, 52, 65)"})
    $(this).css({"font-weight": "700"})
    $(".intro").css({"font-weight": "normal"})
    $(".intro").css({"color": "rgb(154, 155, 167)"})
    $(".total").css({"font-weight": "normal"})
    $(".total").css({"color": "rgb(154, 155, 167)"})

    $("#introRightBox").css({"display": "none"})
    $("#totalRightBox").css({"display": "none"})
})

/* QR 보러가기 모달창 */
function openModal() {
    $("#modal").css({"display": "block"})
    document.body.style.overflow = "hidden";
}

function closeModal() {
    $("#modal").css({"display": "none"})
    document.body.style.overflow = "unset";
}

/* 외부영역 클릭시 모달 닫기 */
$(document).mouseup(function (e) {
    if ($("#modal").has(e.target).length === 0) {
        $("#modal").hide();
        document.body.style.overflow = "unset";
    }
});


/* 슬라이드 */
/* 클릭인덱스 */
/*var i = 0;*/
/* 좌클릭 */
/*$(".prevButton").click(function() {
    if (i > 0) {
        i = i - 1;
        $(".images").stop().animate({
            "left": -171 * i + "px"
        }, "slow");
    }
});*/


/* 우클릭 */
/*$(".nextButton").click(function() {
    if (i < 2) {
        i = i + 1;
        console.log(i);
        $(".images").stop().animate({
            "left": -205 * i + "px"
        }, "slow");
        if(i==2){
            $(".images").stop().animate({
                "left": -188 * i + "px"
            }, "slow");
        }
    }

});*/


/* 사진 클릭시 큰 사진으로 바뀜 */
var mainImage = document.querySelector('#mainImage');

/* 사진 클릭시 큰 사진으로 바뀜 */
var mainImage = document.querySelector('#mainImage');

$(".one").click(function () {
    $("#mainImage").attr('src', $(this).attr('src'));
})

/*--------------------황지수----------------------------*/

// 보육원 정보
function getInfo1(param, callback, error) {
    $.ajax({
        url: "/schoolrest/info/" + param.userId,
        type: "get",
        success: function (schoolDTO, status, xhr) {
            if (callback) {
                callback(schoolDTO);
            }
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    });
}

// 보육원 최근 기부
function getRecent1(param, callback, error) {
    $.ajax({
        url: "/schoolrest/recent/" + param.userId,
        type: "get",
        success: function (recentDonations, status, xhr) {
            if (callback) {
                callback(recentDonations);
            }
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    });
}

// 보육원 기부랭킹
function getRanking1(param, callback, error) {
    $.ajax({
        url: "/schoolrest/ranking/" + param.userId,
        type: "get",
        success: function (donationRanking, status, xhr) {
            if (callback) {
                callback(donationRanking);
            }
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    });
}
//==============================댓글============================
//보육원 댓글
function getReply1(param, callback, error) {
    $.ajax({
        url: "/schoolrest/reply/" + param.page + "/" + param.userId,
        type: "get",
        success: function (replys, status, xhr) {
            if (callback) {
                callback(replys);
            }
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    });
}

//댓글 작성된 시간
function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

// 댓글 더보기
let moreFlag;
const $moreButton = $('.moreButton');

$moreButton.on('click', function () {
    if (lastReplyFlag) return;
    moreFlag = true;
    nowPage++;
    showReply();
})

// 댓글 삭제
function remove(replyId, callback, error) {
    $.ajax({
        url: "/schoolrest/" + replyId,
        type: "get",
        success: function(){
            callback();
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

// 댓글 수정
function modify(reply, callback, error) {
    $.ajax({
        url: "/schoolrest/modify/",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(reply),
        success: function(){
            callback();
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

// 댓글 등록
function register(reply, callback, error) {
    $.ajax({
        url: "/schoolrest/register/",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(reply),
        success: function(){
            callback();
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//========================좋아요=========================
//내가 좋아한 보육원
function getLikeSchoolList(callback, error){
    $.ajax({
        url:"/schoolrest/likeSchool",
        type: "get",
        success:function(likeSchoolList){
            callback(likeSchoolList);
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//좋아요 개수
function getLikeCount(userId, callback, error){
    $.ajax({
        url:"/schoolrest/likeCount/" + userId,
        type: "get",
        success:function(likeCount){
            callback(likeCount);
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//좋아요 누름
function likeSchool(userId, callback, error){
    $.ajax({
        url:"/schoolrest/like/" + userId,
        type: "get",
        success:function(likeCount){
            callback(likeCount);
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//좋아요 취소
function cancelLikeSchool(userId, callback, error){
    $.ajax({
        url:"/schoolrest/cancel/" + userId,
        type: "get",
        success:function(likeCount){
            callback(likeCount);
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//========================기부=======================
function serviceVisitDate (serviceDTO, callback, error){
    $.ajax({
        url: "/schoolrest/visit",
        type: "post",
        data: JSON.stringify(serviceDTO),
        contentType: "application/json; charset=utf-8",
        success: function(){
            alert("신청 완료!!")
            console.log("들어왔니?")
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    })
}

//기부하기로 이동
$('#donateMoney').on('click',function(){
    location.href = "/school/donation?userId=" + $('.userId').val();
})
