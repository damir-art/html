window.addEventListener('keydown', function (e) {
    var ekey = e.key
    var ecode = e.code
    console.log('Нажата клавиша: ' + ekey)
    console.log('Код клавиши: ' + ecode)
    console.log(e)
    console.log(e.target)
})