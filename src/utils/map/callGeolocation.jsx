function callGeolocation(map) {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {

            const { latitude, longitude } = position.coords;
            map.getView().setCenter([ longitude, latitude])
        }, () => alert('실패'), { enableHighAccuracy: true} );
    }

    else {
        alert('사용자 위치를 확인할 수 없습니다.');
    }
}