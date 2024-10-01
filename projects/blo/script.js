document.addEventListener("DOMContentLoaded", () => {
    loadPosts();
});

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <h4>Category: ${post.category}</h4>
            <p>${post.content}</p>
            <div class="comment-section">
                <h4>Comments</h4>
                <div id="comments-${post.id}"></div>
                <input type="text" id="comment-input-${post.id}" placeholder="Add a comment">
                <button onclick="addComment(${post.id})">Comment</button>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);

        loadComments(post.id);
    });
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const comment = commentInput.value;

    if (comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || {};
        if (!comments[postId]) {
            comments[postId] = [];
        }
        comments[postId].push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments(postId);
        commentInput.value = '';
    }
}

function loadComments(postId) {
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = '';

    if (comments[postId]) {
        comments[postId].forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        });
    }
}

document.getElementById('post-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        id: Date.now(),
        title,
        category,
        content
    };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    this.reset();
    alert('Post published!');
});
