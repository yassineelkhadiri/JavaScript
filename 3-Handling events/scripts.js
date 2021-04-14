const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const greenButton = document.getElementById('color-button-green');
const brownButton = document.getElementById('color-button-brown');
const noneButton = document.getElementById('color-button-none');
const addPostButton = document.getElementById('add-post');
const removePostButton = document.getElementById('remove-post');
const articleSection = document.querySelector('section');


blueButton.addEventListener('click', () => { 
    header.classList.add('blue-background', 'text-white');
    header.classList.remove('brown-background', 'green-background');
}
);
greenButton.addEventListener('click', () => { 
    header.classList.add('green-background', 'text-white');
    header.classList.remove('brown-background', 'bleu-background');
}
);

brownButton.addEventListener('click', () => { 
    header.classList.add('brown-background', 'text-white');
    header.classList.remove('blue-background', 'green-background');
}
);

noneButton.addEventListener('click', () => { 
    header.classList.remove('blue-background','brown-background', 'green-background');
}
);

function createNewPost() {
    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');
    
    newArticle.classList.add('list-group-item');
    newHeading.textContent='New Post';
    newParagraph.textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);
    

    return newArticle;

}

addPostButton.addEventListener('click' , () => {
    const newPost = createNewPost();
    articleSection.appendChild(newPost);
});

removePostButton.addEventListener('click', () => {
    const articleCount = articleSection.childElementCount;
    if (articleCount > 1 )
    {
        articleSection.removeChild(articleSection.children[articleCount-1]);
    }
})


