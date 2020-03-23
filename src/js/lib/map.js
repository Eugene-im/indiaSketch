    // Создание обработчика для события window.onLoad
    YMaps.jQuery(function () {
        // Создание экземпляра карты и его привязка к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Установка для карты ее центра и масштаба
        map.setCenter(new YMaps.GeoPoint(37.654278,55.740598), 15);

        // Создание стиля для содержимого балуна
        var s = new YMaps.Style();
        s.balloonContentStyle = new YMaps.BalloonContentStyle(
            new YMaps.Template("<div style=\"color:green\">$[description]</div>")
        );

        // Создание метки с пользовательским стилем и добавление ее на карту
        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.654278,55.740598), {
            style: s
        });
        placemark.description = "Добро пожаловать на Яндекс.Карты!";
        map.addOverlay(placemark);

        // Открытие балуна
        placemark.openBalloon();
    });