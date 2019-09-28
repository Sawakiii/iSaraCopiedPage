// --------------------------
// Topへ戻るボタンjs
// --------------------------
let goToTop = document.getElementById("go-to-top")

window.onscroll = function backToTopOnscroll() {
    let goToTop = document.getElementById("go-to-top")
    // windowのスクロール量を取得
    let scrollP = document.documentElement.scrollTop
    
    // 一定以下なら非表示
    if (scrollP < 100) {
        goToTop.classList.remove("go-to-top-on-scroll")
        goToTop.classList.add("go-to-top")
        // 一定以上なら表示
    } else if (scrollP > 100) {
        // goToTop.classList.remove("go-to-top")
        goToTop.classList.add("go-to-top-on-scroll")
    }
}

// --------------------------
// #member内の高さをそろえるjs
// --------------------------
let otakiHeight = document.getElementById("otaki-height-get-id").clientHeight
let manabuHeight = document.getElementById("manabu-height-get-id").clientHeight

if (otakiHeight > manabuHeight) {
    document.getElementById("manabu-height-get-id").style.height = otakiHeight + "px"
}else if (manabuHeight > otakiHeight) {
    document.getElementById("otaki-height-get-id").style.height = manabuHeight + "px"
}


// --------------------------
// よくある質問のjs
// --------------------------
var questionButtons = document.getElementsByClassName("question-button")
let movingPs = document.getElementsByClassName("moving-p")
let BottomArrows = document.getElementsByClassName("bottom-arrow")

function openDetail(movingP, Arrow) {
    if (movingP.classList.contains("hide-p")) {
        movingP.classList.remove("hide-p")
        movingP.classList.add("open-p")
        Arrow.classList.remove("bottom-arrow")
        Arrow.classList.add("up-arrow")
    }else if (movingP.classList.contains("open-p")) {
        movingP.classList.remove("open-p")
        movingP.classList.add("hide-p")
        Arrow.classList.remove("up-arrow")
        Arrow.classList.add("bottom-arrow")
    }
}

for (var i=0; i < questionButtons.length;i++) {
    let questionButton = questionButtons[i]
    let movingP = movingPs[i]
    let BottomArrow = BottomArrows[i]
    questionButton.addEventListener('click', function(){
        openDetail(movingP, BottomArrow)
    })
}





