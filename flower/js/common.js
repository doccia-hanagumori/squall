jQuery(function() {
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowSm >= windowWidth) {
    var headerHeight = 90;
  } else {
    var headerHeight = 120;
  }
  var documentUrl = location.origin + location.pathname + location.search;
  jQuery(document).on('click', 'a[href*="#"]', function(event) {
    var anchor = event.currentTarget;
    var anchorUrl = anchor.protocol + '//' + anchor.host + anchor.pathname + anchor.search;
    if (documentUrl !== anchorUrl) {
      return true;
    }

    var speed = 500;
    var position = $(anchor.hash).offset().top - headerHeight;
    jQuery('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    event.preventDefault();
    return false;
  });
});

    var particleSystem = null;
    var stage = null;
    //  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
    window.addEventListener("load", function() {
      // Stageオブジェクトを作成します。表示リストのルートになります。
      stage = new createjs.Stage("myCanvas");
      // パーティクルシステム作成します。
      particleSystem = new particlejs.ParticleSystem();
      // パーティクルシステムの描画コンテナーを表示リストに登録します。
      stage.addChild(particleSystem.container);
      // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
      particleSystem.importFromJson(
        // パラメーターJSONのコピー＆ペースト ここから--
        {
          "bgColor": "transparent",
          "width": 1400,
          "height": 600,
    "emitFrequency": 12,
    "startX": 705,
    "startXVariance": "597",
    "startY": 548,
    "startYVariance": 557,
    "initialDirection": 99.5,
    "initialDirectionVariance": 268,
    "initialSpeed": 0.4,
    "initialSpeedVariance": 2.3,
    "friction": 0.1265,
    "accelerationSpeed": 0.089,
    "accelerationDirection": 269.7,
    "startScale": 0.1,
    "startScaleVariance": 0.44,
    "finishScale": "0",
    "finishScaleVariance": "0",
    "lifeSpan": "136",
    "lifeSpanVariance": "27",
    "startAlpha": "1",
    "startAlphaVariance": 0.26,
    "finishAlpha": "0.8",
    "finishAlphaVariance": "0",
    "shapeIdList": [
        "flower",
        "blur_circle"
    ],
    "startColor": {
        "hue": 214,
        "hueVariance": "0",
        "saturation": 66,
        "saturationVariance": "0",
        "luminance": 82,
        "luminanceVariance": 65
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
}
        // パラメーターJSONのコピー＆ペースト ここまで---
      );
      // フレームレートの設定
      createjs.Ticker.framerate = 60;
      // requestAnimationFrameに従った呼び出し
      createjs.Ticker.timingMode = createjs.Ticker.RAF;
      // 定期的に呼ばれる関数を登録
      createjs.Ticker.addEventListener("tick", handleTick);
    });

    function handleTick() {
      // パーティクルの発生・更新
      particleSystem.update();
      // 描画を更新する
      stage.update();
    }
