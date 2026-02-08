document.getElementById('popButton').addEventListener('click', function() {
  const heart = document.getElementById('heart');
  heart.style.transition = "all 0.5s ease";
  heart.style.transform = "scale(0)";

  setTimeout(function() {
    heart.style.transform = "scale(1)";
    alert('💥 Boom! A Heart just popped out for you! 💖');
  }, 500);
});
