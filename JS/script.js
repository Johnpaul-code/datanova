const navigationLinks = document.querySelectorAll('.link')

navigationLinks.forEach((link)=>{
    const dropdown = link.querySelector('.dropdown');
    

    // 1. Show when entering link or dropdown
    link.addEventListener('click', () => {
        dropdown.classList.toggle('open')
    })
})






// const navigationLinks = document.querySelectorAll('.link')

// navigationLinks.forEach((link)=>{
//     const dropdown = link.querySelector('.dropdown');
    
//     if(!dropdown) return

    
//     let timeout = null

//     const show = () =>{
//         clearTimeout(timeout)
//         dropdown.classList.add('open')
//     }

//     const hide = () => {
//         dropdown.classList.remove('open')
//     }

//     const scheduleHide = () => {
//         clearTimeout()
//         timeout = setTimeout(hide, 200) //wait for 200ms
//     }

//     // 1. Show when entering link or dropdown
//     link.addEventListener('mouseenter', show)
//     dropdown.addEventListener('mouseenter', show)

//     // 2. Start timer when leaving link or dropdown
//     link.addEventListener('mouseleave', scheduleHide)
//     dropdown.addEventListener('mouseleave', scheduleHide)

//     // 3. Click anywhere outside to cole immediately
//     document.addEventListener('click', (e) => {
//         navigationLinks.forEach((link) => {
//             const dropdown = link.querySelector('.dropdown')
//             if(!dropdown) return

//             // if click is not inside this link or its dropdown
//             if(!link.contains(e.target)){
//                 dropdown.style.display = 'none'
//             }
//         })
//     })
// })
