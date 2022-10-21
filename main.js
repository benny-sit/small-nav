document.addEventListener('DOMContentLoaded', function() {
    const smallNav = document.getElementById('nav-elements-all');
    
    Array.from(smallNav.children).forEach(li => {
        console.log(li)
        
        const aTag = li.querySelector('a');
        aTag.addEventListener('click', e => {
            Array.from(smallNav.children).forEach(li => [
                li.classList.remove('active')
            ])
            e.target.closest('li').classList.add('active');
        })
    })
    
    
    function changeActive(aObj) {
        aObj.parentNode.classList.toggle('active')
    }
}, false);

