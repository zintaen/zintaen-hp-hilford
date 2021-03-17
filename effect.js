$(window).load(function() {
    $(".loading").fadeOut("fast");
    $(".container").fadeIn("fast");
});

$("document").ready(function() {
    let windowWidth;
    $(window).resize(function() {
        windowWidth = $(window).width() / 2;
        $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
        $("#b11").animate({ top: 240, left: windowWidth - 350 }, 500);
        $("#b22").animate({ top: 240, left: windowWidth - 250 }, 500);
        $("#b33").animate({ top: 240, left: windowWidth - 150 }, 500);
        $("#b44").animate({ top: 240, left: windowWidth - 50 }, 500);
        $("#b55").animate({ top: 240, left: windowWidth + 50 }, 500);
        $("#b66").animate({ top: 240, left: windowWidth + 150 }, 500);
        $("#b77").animate({ top: 240, left: windowWidth + 250 }, 500);
    });

    $("#turn_on").click(function() {
        $("#bulb_yellow").addClass("bulb-glow-yellow");
        $("#bulb_red").addClass("bulb-glow-red");
        $("#bulb_blue").addClass("bulb-glow-blue");
        $("#bulb_green").addClass("bulb-glow-green");
        $("#bulb_pink").addClass("bulb-glow-pink");
        $("#bulb_orange").addClass("bulb-glow-orange");
        $("body").addClass("peach");
        $(this)
            .fadeOut("slow")
            .delay(5000)
            .promise()
            .done(function() {
                $("#play").click();
            });
    });
    $("#play").click(function() {
        const audio = $(".song")[0];
        audio.play();
        $("#bulb_yellow").addClass("bulb-glow-yellow-after");
        $("#bulb_red").addClass("bulb-glow-red-after");
        $("#bulb_blue").addClass("bulb-glow-blue-after");
        $("#bulb_green").addClass("bulb-glow-green-after");
        $("#bulb_pink").addClass("bulb-glow-pink-after");
        $("#bulb_orange").addClass("bulb-glow-orange-after");
        $("body").css("backgroud-color", "#FFF");
        $("body").addClass("peach-after");
        $(this)
            .fadeOut("slow")
            .delay(6000)
            .promise()
            .done(function() {
                $("#bannar_coming").click();
            });
    });

    $("#bannar_coming").click(function() {
        $(".bannar").addClass("bannar-come");
        $(this)
            .fadeOut("slow")
            .delay(6000)
            .promise()
            .done(function() {
                $("#balloons_flying").click();
            });
    });

    function loopBalloon(list) {
        list.forEach(ele => {
            const randleft = 1000 * Math.random();
            const randtop = 500 * Math.random();

            $(ele).animate(
                { left: randleft, bottom: randtop },
                10000,
                function() {
                    loopBalloon();
                }
            );
        });
    }

    $("#balloons_flying").click(function() {
        $(".balloon-border").animate({ top: -500 }, 8000);
        $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").addClass(
            "balloons-rotate-behaviour-two"
        );
        loopBalloon(["#b1", "#b2", "#b3", "#b4", "#b5", "#b6", "#b7"]);

        $(this)
            .fadeOut("slow")
            .delay(5000)
            .promise()
            .done(function() {
                $("#cake_fadein").click();
            });
    });

    $("#cake_fadein").click(function() {
        $(".cake").fadeIn("slow");
        $(this)
            .fadeOut("slow")
            .delay(3000)
            .promise()
            .done(function() {
                $("#light_candle").click();
            });
    });

    $("#light_candle").click(function() {
        $(".fuego").fadeIn("slow");
        $(this)
            .fadeOut("slow")
            .promise()
            .done(function() {
                $("#wish_message").click();
            });
    });

    $("#wish_message").click(function() {
        windowWidth = $(window).width() / 2;

        $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
        $("#b1").attr("id", "b11");
        $("#b2").attr("id", "b22");
        $("#b3").attr("id", "b33");
        $("#b4").attr("id", "b44");
        $("#b5").attr("id", "b55");
        $("#b6").attr("id", "b66");
        $("#b7").attr("id", "b77");
        $("#b11").animate({ top: 240, left: windowWidth - 350 }, 500);
        $("#b22").animate({ top: 240, left: windowWidth - 250 }, 500);
        $("#b33").animate({ top: 240, left: windowWidth - 150 }, 500);
        $("#b44").animate({ top: 240, left: windowWidth - 50 }, 500);
        $("#b55").animate({ top: 240, left: windowWidth + 50 }, 500);
        $("#b66").animate({ top: 240, left: windowWidth + 150 }, 500);
        $("#b77").animate({ top: 240, left: windowWidth + 250 }, 500);
        $(".balloons").css("opacity", "0.9");
        $(".balloons h2").fadeIn(3000);

        $(this)
            .fadeOut("slow")
            .delay(3000)
            .promise()
            .done(function() {
                $("#story").click();
            });
    });

    $("#story").click(function() {
        $(this).fadeOut("slow");
        $(".cake")
            .fadeOut("fast")
            .promise()
            .done(function() {
                $(".message").fadeIn("slow");
            });

        let i;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")")
                .fadeOut("slow")
                .delay(800)
                .promise()
                .done(function() {
                    i++;
                    $("p:nth-child(" + i + ")")
                        .fadeIn("slow")
                        .delay(1000);
                    if (i === 50) {
                        $("p:nth-child(49)")
                            .fadeOut("slow")
                            .promise()
                            .done(function() {
                                $(".cake").fadeIn("fast");
                            });
                    } else {
                        msgLoop(i);
                    }
                });
        }

        msgLoop(0);
    });
});
