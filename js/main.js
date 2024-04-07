const plus = document.querySelectorAll('.question img'),
paragraph = document.querySelectorAll('.answer')
    
    for(let i =0 ; plus.length>i ; i++){
        for(let j=0 ; paragraph.length>j ; j++){
            if(i==j){
                plus[i].addEventListener('click',()=>{
                    if(paragraph[j].classList.contains('block')){
                        plus[i].src="assets/images/icon-plus.svg"
                        paragraph[j].classList.add('block')
                        m()
                    }else{
                        plus.forEach((m)=>{
                            paragraph.forEach((j)=>{
                            if(m.src.match("assets/images/icon-minus.svg") && j.classList.contains('block')){
                                m.src="assets/images/icon-plus.svg" 
                                j.classList.remove('block') 
                            }
                    })})
                    m()
                }
                function m(){
                            if(plus[i].src.match("assets/images/icon-plus.svg") && !paragraph[j].classList.contains('block')){
                    plus[i].src="assets/images/icon-minus.svg"
                    paragraph[j].classList.add('block')
                }else{
                    plus[i].src="assets/images/icon-plus.svg" 
                    paragraph[j].classList.remove('block') 
                }
            }
                })

            }
        }
    }