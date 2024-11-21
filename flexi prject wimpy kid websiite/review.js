document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('review-form');
    const userReviews = document.querySelector('.user-reviews');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('review').value;

        // Create a new review element and add it to the reviews section
        const reviewElement = document.createElement('div');
        reviewElement.className = 'user-review';
        reviewElement.innerHTML = `
            <p><strong>${name}</strong> rated it ${rating} stars</p>
            <p>${reviewText}</p>
        `;
        userReviews.appendChild(reviewElement);

        // Clear the form
        reviewForm.reset();
    });
});
