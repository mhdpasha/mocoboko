AOS.init()

const scrollPage = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;

  return (docST + bodyST) / (docSH - docCH) * 100
}
window.onscroll = () => {
    lineAnimation.seek((scrollPage() / 110) * lineAnimation.duration);
};

const lineAnimation = anime({
    targets: '#lineAnimation',
    height: ['0%','100%'],
    easing: 'easeInOutQuart',
    direction: 'alternate',
    autoplay: false,
});