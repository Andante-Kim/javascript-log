// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

function bumpDir(dir) {
    const el = document.getElementById('countLabel');
    el.classList.remove('bump-up', 'bump-down');
    void el.offsetWidth;
    el.classList.add(dir === 'up' ? 'bump-up' : 'bump-down');
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    bumpDir('up');
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    bumpDir('down');
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

