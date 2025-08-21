 document.addEventListener("DOMContentLoaded", function() {
      const deliveryBtn = document.querySelectorAll('.icon-button')[0];
      const takeawayBtn = document.querySelectorAll('.icon-button')[1];
      const deliveryBox = document.querySelector('.delivery');
      const takeawayBox = document.querySelector('.takeaway');
      const overlay = document.querySelector('.overlay');
      const centerScreen = document.querySelector('.center-screen');

      // Initialize - hide both boxes and overlay
      if (deliveryBox) deliveryBox.style.display = 'none';
      if (takeawayBox) takeawayBox.style.display = 'none';
      if (overlay) overlay.style.display = 'none';

      // Function to hide all boxes
      function hideAllBoxes() {
        if (deliveryBox) deliveryBox.style.display = 'none';
        if (takeawayBox) takeawayBox.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
      }

      // Add event listeners 
      if (deliveryBtn && deliveryBox) {
        deliveryBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          deliveryBox.style.display = 'flex';
          if (takeawayBox) takeawayBox.style.display = 'none';
          if (overlay) overlay.style.display = 'block';
        });
      }

      if (takeawayBtn && takeawayBox) {
        takeawayBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          if (deliveryBox) deliveryBox.style.display = 'none';
          takeawayBox.style.display = 'flex';
          if (overlay) overlay.style.display = 'block';
        });
      }

      // Hide boxes when clicking on overlay
      if (overlay) {
        overlay.addEventListener('click', hideAllBoxes);
      }

      // Hide boxes when clicking anywhere on document except the boxes themselves
      document.addEventListener('click', function(e) {
        if (!centerScreen.contains(e.target) && 
            e.target !== deliveryBtn && 
            e.target !== takeawayBtn) {
          hideAllBoxes();
        }
      });

     
      if (centerScreen) {
        centerScreen.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      }
    });

