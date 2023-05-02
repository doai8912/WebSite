var domain = 'https://i1.daumcdn.net';
var path = '/dmaps/apis/openapi/sampleimg/';
var plan = function( x, y, z ) {
    y = -y - 1;
    var limit = Math.ceil( 3 / Math.pow( 2, z ) );

    if ( 0 <= y && y < limit && 0 <= x && x < limit ) {
        return domain + path + 'planh' +
            z + '_' + y + '_' + x + '.png';
    } else {
        return 'https://i1.daumcdn.net/dmaps/apis/white.png';
    }
};

kakao.maps.Tileset.add( 'PLAN',
        new kakao.maps.Tileset(
            512, 512, plan, '', false, 0, 2 ) );

var node = document.getElementById( 'map' );
var map = new kakao.maps.Map( node, {
    projectionId: null,
    mapTypeId: kakao.maps.MapTypeId.PLAN,
    $scale: false,
    center: new kakao.maps.Coords( 650, -550 ),
    level: 2
} );
var center = map.getCenter();
var marker = new kakao.maps.Marker({
    position: center
});
marker.setMap(map);

var infowindow = new kakao.maps.InfoWindow({
    content: '커스텀 타일셋을 올릴수 있습니다!'
});
infowindow.open(map, marker);