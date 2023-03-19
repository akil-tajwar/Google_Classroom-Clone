//plus button
document.getElementById('plus').addEventListener('click', ()=>{
    document.getElementById('joinCreate').classList.toggle('d-none');
});

//main card body
document.getElementById('create-class').addEventListener('click', () => {
    const allCards = document.getElementById('all-cards');
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div onclick="insideClass()" class="card m-3" style="width: 18rem;">
        <div>
            <div class="class-details">
                <h4 id="className">${document.getElementById('classNameInput').value}</h4>
                <p>${document.getElementById('sectionInput').value}</p>
                <p>${document.getElementById('instructorName').innerText}</p>
            </div>
            <div class="text-end"><img class="instructor" src="./media/akil.jpg" alt=""></div>
        </div>
        <div class="card-body">
            <p class="card-text">Due today: Assignment-3</p>
        </div>
        <div class="card-footer text text-end p-3">
            <i class="fa-regular fa-id-badge fs-4 text pointer"></i>
            <i class="fa-regular fa-folder-closed fs-4 text ms-3 pointer"></i>
        </div>
    </div>
    `;
    allCards.appendChild(cardDiv);

    //offcanvas
    const offcanvasClasses = document.getElementById('offcanvasClasses');
    const offcanvasClassDiv = document.createElement('div');
    offcanvasClassDiv.innerHTML = `
    <div class="d-flex gap-3">
        <h2 class="offcanvas-class">${document.getElementById('classNameInput').value.slice(0,1)}</h2>
        <div>
            <div><h5>${document.getElementById('classNameInput').value}</h5></div>
            <div><p>${document.getElementById('sectionInput').value}</p></div>
        </div>
    </div>
    `;
    offcanvasClasses.appendChild(offcanvasClassDiv);
});

//inside class linking function
const insideClass = () => {
    window.location.href = 'inside-class.html';
}