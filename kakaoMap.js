function kakaoMap() {
    var container = document.getElementById('map'); // 지도를 표시할 div
var options = {
    center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(container, options);

// "지도 중심좌표 이동시키기"
function setCenter() {
    // 이동할 위도 경도 위치를 생성한다.
    var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

    // 지도 중심을 이동시칸다.
    map.setCenter(moveLatLon);
}

// "지도 중심좌표 부드럽게 이동시키기"
function panTo() {
    // 이동할 위도 경도 위치를 생서한다
    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);

    map.panTo(moveLatLon)
}
};

$(function() {
    kakaoMap();
})
