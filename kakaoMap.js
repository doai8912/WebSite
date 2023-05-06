function kakaoMap() {
    var container = document.getElementById('map'),
        options = {
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
    // 이동할 위도 경도 위치를 생성한다
    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);

    map.panTo(moveLatLon)
}

var mapTypes = {
        traffic : kakao.maps.MapTypeId.TRAFFIC,
        roaiview : kakao.maps.MapTypeId.ROADVIEW,
        bicycle : kakao.maps.MapTypeId.BICYCLE,
    };

// 버튼이 클릭되면 호출되는 함수입니다
function setOverlayMapTypeId() {
    var chkTraffic = document.getElementById('chkTraffic'),
        chkRoadview = document.getElementById('cheRoadview'),
        chkBicycle = document.getElementById('chkBicycle');
    
    for (var type in mapTypes) {
        map.removeOverlayMapTypeId(mapTypes[type]);
    }

    if (chkTraffic.checked) {
        map.addOverlayMapTypeId(mapTypes.traffic);
    }

    if (chkRoadview.checked) {
        map.addOverlayMapTypeId(mapTypes.roaiview);
    }

    if (chkBicycle.checked) {
        map.addOverlayMapTypeId(mapTypes.bicycle);
    }
}
    
// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수이다.
function zoomIn() {
    map.setLevel(map.getLever() -1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수이다.
function zoomOunt() {
    map.setLevel(map.getLever() +1);
}
};

$(function() {
    kakaoMap();
})
