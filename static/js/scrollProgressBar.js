function getScrollPercent() {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  return (scrolled / totalHeight) * 100;
}

const scrollProgressBar = document.getElementById("scroll-progress-bar");

document.onscroll = function () {
  if (!scrollProgressBar) return;
  var scrollPercent = Math.round(getScrollPercent());
  scrollProgressBar.style.width = scrollPercent + "%";
  scrollProgressBar.style.backgroundColor = "var(--primary-color)";
  scrollProgressBar.ariaValueNow = scrollPercent;
};
