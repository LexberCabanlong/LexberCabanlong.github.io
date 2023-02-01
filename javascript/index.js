const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        console.log(entry)
        if(entry.isIntersecting){
            if(entry.target.classList.contains("hidden-right")){
                entry.target.classList.add('show-right');
            }else if(entry.target.classList.contains("hidden-left")){
                entry.target.classList.add('show-left');
            }
        }else{
            if(entry.target.classList.contains("hidden-right")){
                entry.target.classList.remove('show-right');
            }else if(entry.target.classList.contains("hidden-left")){
                entry.target.classList.remove('show-left');
            }
            //entry.target.classList.remove('show-left');
        }
    });
});

const hiddenRightElements = document.querySelectorAll('.hidden-right');
hiddenRightElements.forEach((el)=>observer.observe(el));

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el)=>observer.observe(el));
