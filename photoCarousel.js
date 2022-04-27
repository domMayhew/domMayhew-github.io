const photoCarousel = {
    slideIndex: 0,

    updateVisibleSlide: function(newIndex) {
        // Do nothing if the current slide's dot is clicked.
        if (newIndex == this.slideIndex) {
            return;
        }

        // Set up animation data.
        let inAnimation;
        let outAnimation;
        if (newIndex > this.slideIndex) { // Direction is right to left
            inAnimation = this.animations.rightToCenter;
            outAnimation = this.animations.centerToLeft;
        } else { // Direction is left to right
            inAnimation = this.animations.leftToCenter;
            outAnimation = this.animations.centerToRight;
        }

        // Handle wrapping / out of bounds values.
        slides = document.getElementsByClassName("slide");
        if (newIndex >= slides.length) { newIndex = 0 }
        else if (newIndex < 0) { newIndex = slides.length - 1; }

        // Animate correct slides.
        let oldSlide = slides[this.slideIndex];
        let newSlide = slides[newIndex];
        newSlide.animate(inAnimation, this.animations.timing);
        oldSlide.animate(outAnimation, this.animations.timing);

        // Update dot opacities by changing class name.
        const dots = Array.from(document.querySelectorAll(".dot, .dot-selected"));
        dots.forEach(dot => dot.className = "dot");
        dots[newIndex].className = "dot-selected";

        // Update slideIndex.
        this.slideIndex = newIndex;
    },

    dotClickListener: function(mouseEvent) {
        let dot = mouseEvent.target;
        let i = 0;
        while ((dot = dot.previousElementSibling) != null) {
            i++;
        }
        photoCarousel.updateVisibleSlide(i);
    },

    nextSlide: function() {
        photoCarousel.updateVisibleSlide(this.slideIndex + 1);
    },

    prevSlide: function() {
        photoCarousel.updateVisibleSlide(this.slideIndex - 1);
    },

    animations: {
        leftToCenter: { left: ['-100%', '0'], opacity: ['0.75', '1'] },
        centerToLeft: { left: ['0', '-100%'], opacity: ['1', '0.25'] },
        rightToCenter: { left: ['100%', '0'], opacity: ['0.75', '1'] },
        centerToRight: { left: ['0', '100%'], opacity: ['1', '0.25'] },
        timing: { duration: 750, fill: 'forwards', easing: 'ease-out' }
    },

    initializeSlides: function(container, directoryPath, baseName, fileType, numFiles) {
        for (i = 0; i < numFiles; i++) {
            // Create image.
            let img = document.createElement("img");
            img.src = directoryPath + baseName + (i + 1) + fileType;
            img.className = "slide";
            img.style.top = "0";
            container.appendChild(img);

            // Create dot.
            const dotContainer = document.getElementsByClassName("dot-container")[0];
            const dot = document.createElement("span");
            dot.className = "dot";
            dot.onclick = this.dotClickListener;
            dotContainer.appendChild(dot);

            // "Select" first image and dot.
            if (i == 0) {
                // Image
                img.style.opacity = "1";
                img.style.position = 'relative'; // Required to give the container the correct size.

                // Dot
                dot.className = "dot-selected";
            }
        }
        slideIndex = 0;
    }
}