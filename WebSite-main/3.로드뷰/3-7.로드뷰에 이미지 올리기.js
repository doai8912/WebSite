var img = document.createElement('img');
img.id = 'overlayImg';
img.src = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/roadviewoverlay_img_02.png';

var rvContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div
var rv = new kakao.maps.Roadview(rvContainer); // 로드뷰 객체 생성
var rc = new kakao.maps.RoadviewClient(); // 좌표를 통한 로드뷰의 panoid를 추출하기 위한 로드뷰 help객체 생성 
var rvPosition = new kakao.maps.LatLng(37.572743, 126.977228);

rc.getNearestPanoId(rvPosition, 50, function(panoid) {
    rv.setPanoId(panoid, rvPosition);//좌표에 근접한 panoId를 통해 로드뷰를 실행합니다.
});

// 로드뷰 초기화 이벤트
kakao.maps.event.addListener(rv, 'init', function() {
    
    //로드뷰의 viewpoint값을 적절하게 이동시킵니다.
    rv.setViewpoint( new kakao.maps.Viewpoint( 300, -7, 3 ) );

    //커스텀 오버레이를 로드뷰 위에 올립니다.
    new kakao.maps.CustomOverlay({
        map: rv,
        position:  new kakao.maps.Viewpoint(299.7, -7.6),
        content: img
    });
});