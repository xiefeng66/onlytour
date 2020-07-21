
    var demo=$('#demo')

    demo.carousel({
        interval:1000
    })

    $('#btn1').click(function () {
        demo.carousel('cycle')
    })

    $('#btn2').click(function () {
        demo.carousel('pause')
    })

    $('#btn3').click(function () {
        demo.carousel(2)
    })

    $('#btn4').click(function () {
        demo.carousel('prev')
    })

    $('#btn5').click(function () {
        demo.carousel('next')
    })

    demo.on('slide.bs.carousel',function (options) {
        console.log('slide',options)
    }).on('slid.bs.carousel',function (options) {
        console.log('slid',options)
    })

