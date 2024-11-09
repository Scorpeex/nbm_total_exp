function calculate_exp() {
    let articles = document.getElementsByClassName('prog-level-exe');
    //console.log(articles)
    function repeater(){
        let res = 0
        for (key in articles) {
            let x = parseInt(articles[key].outerText)
            if (x>0){res = res + x}        
        }
        console.log(res)

        const p = document.createElement('p')        
        p.className = "current-exp"
        p.style.bottom = "5px"
        p.style.left = "5px"
        p.style.right = "5px"
        p.style.top = "5px"
        p.style.margin = 0
        p.style.position ="absolute"
        p.style.backgroundImage = "url(/img/space_station/bg-crafting-time.png)"
        p.style.backgroundSize = "100% 100%"
        p.style.color="#41b8ea"
        p.style.fontFamily="RussoOne"
        p.style.fontSize="12px"
        p.style.fontWeight="700"
        p.style.height="45px"
        p.style.letterSpacing=".02em"
        p.style.lineHeight="1.67"
        p.style.padding="12px"
        p.style.textAlign="center"
        p.style.textTransform="uppercase"

        const d = document.createElement('div')
        d.className = "wrapper-progress-info-mission-time"

        const d2 = document.createElement('p')
        d2.classname = "info-time-text progress-info"
        d2.textContent = "Total exp: "+ res

        const y = document.getElementsByClassName('wrapper-progress-info-mission-time')
        console.log(y)
        const z = document.getElementsByClassName('wrapper-progress-info-mission-time')        
        if (z.length === 1 ){
            p.textContent = "Experience collected on this run: "+res 
            // y[0].after(p)
            y[0].after(d)
            d.append(p)            
        }
        if (z.length === 2){
            document.getElementsByClassName('current-exp')[0].textContent = "Experience collected on this run: "+res   
        }
    }
    repeater()
    setInterval(repeater, 5000)
}