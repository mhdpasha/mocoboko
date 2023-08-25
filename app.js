AOS.init()

const scrollPage = () => {
    const bodyST = document.body.scrollTop
    const docST = document.documentElement.scrollTop
    const docSH = document.documentElement.scrollHeight
    const docCH = document.documentElement.clientHeight

  return (docST + bodyST) / (docSH - docCH) * 100
}
window.onscroll = () => {
    lineAnimation.seek((scrollPage() / 100) * lineAnimation.duration)
    imgAnimation.seek((scrollPage() / 170) * imgAnimation.duration)
}

const lineAnimation = anime({
    targets: '#lineAnimation',
    height: ['0%','100%'],
    easing: 'easeInOutQuart',
    direction: 'alternate',
    autoplay: false,
})

const imgAnimation = anime({
    targets: '#imgAnimation',
    rotate: ['0deg','360deg'],
    direction: 'normal',
})

count = (target, handler) => {
    let value = parseInt(document.getElementById(target).value)
    value = isNaN(value) ? 0 : value

    if(handler == '+') {
        value++
        document.getElementById(target).value = value
    } 
    else if(handler == '-') {
        value--
        document.getElementById(target).value = value;
    }
}