setInterval(function () {
    const show = document.querySelector('span[data-brrr]')
    const next = show.nextElementSibling || document.querySelector('span[first]')

    show.removeAttribute('data-brrr')

    next.setAttribute('data-brrr', '')
}, 6000)