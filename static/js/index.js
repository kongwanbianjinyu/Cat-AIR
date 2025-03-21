// window.HELP_IMPROVE_VIDEOJS = false;


// $(document).ready(function() {
//     // Check for click events on the navbar burger icon

//     var options = {
// 			slidesToScroll: 1,
// 			slidesToShow: 1,
// 			loop: true,
// 			infinite: true,
// 			autoplay: true,
// 			autoplaySpeed: 5000,
//     }

// 		// Initialize all div with carousel class
//     var carousels = bulmaCarousel.attach('.carousel', options);
	
//     bulmaSlider.attach();

// })



// window.HELP_IMPROVE_VIDEOJS = false;

// $(document).ready(function() {
//     // Existing carousel and slider initialization
//     var options = {
//         slidesToScroll: 1,
//         slidesToShow: 1,
//         loop: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 5000,
//     }

//     // Initialize all div with carousel class
//     var carousels = bulmaCarousel.attach('.carousel', options);
    
//     bulmaSlider.attach();

//     // New image comparison slider functionality
//     const setupImageComparison = () => {
//         const container = document.querySelector('.image-comparison');
//         if (!container) return; // Exit if the container doesn't exist

//         const beforeImage = container.querySelector('.image-before');
//         const afterImage = container.querySelector('.image-after');
//         const sliderLine = container.querySelector('.slider-line');
//         const sliderHandle = container.querySelector('.slider-handle');

//         let isDragging = false;

//         const handleMove = (e) => {
//             if (!isDragging) return;
            
//             const containerRect = container.getBoundingClientRect();
//             const containerWidth = containerRect.width;
//             let position = (e.clientX - containerRect.left) / containerWidth;
            
//             position = Math.max(0, Math.min(1, position));
            
//             sliderLine.style.left = `${position * 100}%`;
//             sliderHandle.style.left = `${position * 100}%`;
//             afterImage.style.clipPath = `polygon(${position * 100}% 0, 100% 0, 100% 100%, ${position * 100}% 100%)`;
//         };

//         sliderHandle.addEventListener('mousedown', () => isDragging = true);
//         window.addEventListener('mouseup', () => isDragging = false);
//         window.addEventListener('mousemove', handleMove);

//         // For touch devices
//         sliderHandle.addEventListener('touchstart', () => isDragging = true);
//         window.addEventListener('touchend', () => isDragging = false);
//         window.addEventListener('touchmove', (e) => {
//             e.preventDefault();
//             handleMove(e.touches[0]);
//         });

//         // Set initial position
//         const setInitialPosition = () => {
//             const initialPosition = 0.5; // 50%
//             sliderLine.style.left = `${initialPosition * 100}%`;
//             sliderHandle.style.left = `${initialPosition * 100}%`;
//             afterImage.style.clipPath = `polygon(${initialPosition * 100}% 0, 100% 0, 100% 100%, ${initialPosition * 100}% 100%)`;
//         };

//         setInitialPosition();
//     };

//     // Call the setup function
//     setupImageComparison();
// });


window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Existing carousel and slider initialization
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    bulmaSlider.attach();

    // New image comparison slider functionality
    const setupImageComparison = () => {
        const groups = document.querySelectorAll('.image-comparison-group');
        if (groups.length === 0) return; // Exit if no groups exist

        groups.forEach(group => {
            const comparisons = group.querySelectorAll('.image-comparison');
            const sliderHandle = comparisons[0].querySelector('.slider-handle');
            const sliderLine = comparisons[0].querySelector('.slider-line');

            let isDragging = false;

            const handleMove = (e) => {
                if (!isDragging) return;
                
                const containerRect = comparisons[0].getBoundingClientRect();
                const containerWidth = containerRect.width;
                let position = (e.clientX - containerRect.left) / containerWidth;
                
                position = Math.max(0, Math.min(1, position));
                
                updateImages(position);
            };

            const updateImages = (position) => {
                sliderLine.style.left = `${position * 100}%`;
                sliderHandle.style.left = `${position * 100}%`;
                
                comparisons.forEach(comparison => {
                    const afterImage = comparison.querySelector('.image-after');
                    afterImage.style.clipPath = `polygon(${position * 100}% 0, 100% 0, 100% 100%, ${position * 100}% 100%)`;
                });
            };

            sliderHandle.addEventListener('mousedown', () => isDragging = true);
            window.addEventListener('mouseup', () => isDragging = false);
            window.addEventListener('mousemove', handleMove);

            // For touch devices
            sliderHandle.addEventListener('touchstart', () => isDragging = true);
            window.addEventListener('touchend', () => isDragging = false);
            window.addEventListener('touchmove', (e) => {
                e.preventDefault();
                handleMove(e.touches[0]);
            });

            // Set initial position
            const setInitialPosition = () => {
                const initialPosition = 0.5; // 50%
                updateImages(initialPosition);
            };

            setInitialPosition();
        });
    };

    // Call the setup function
    setupImageComparison();
});

