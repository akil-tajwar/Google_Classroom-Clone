//inside class body
const insideClassBg = document.getElementById('insideClassBg');
const insideClassBgDiv = document.createElement('div');
insideClassBgDiv.innerHTML = `
<h1>Class Name</h1>
<p>Section</p>
`;
// <h1>${document.getElementById('classNameInput').value}</h1>
// <p>${document.getElementById('sectionInput').value}</p>
insideClassBg.appendChild(insideClassBgDiv);

//post
const postButton = () => {
    const post = document.getElementById('post');
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <div class="post-element">
        <div class="d-flex gap-3">
            <div>
                <img src="./media/akil.jpg" alt="">
            </div>
            <div>
                <p>Akil Tajwar</p>
            </div>
        </div>
        <div>
            <p>${document.getElementById('postWords').value}</p>
        </div>
    </div>
    `;
    post.appendChild(postDiv);
}