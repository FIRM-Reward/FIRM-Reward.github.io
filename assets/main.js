const revealNodes = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealNodes.forEach((node) => {
  revealObserver.observe(node);
});

const copyButton = document.getElementById("copy-bibtex");
const bibtexBlock = document.getElementById("bibtex-block");

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    const text = bibtexBlock.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1600);
    } catch (error) {
      copyButton.textContent = "Unavailable";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1600);
    }
  });
}
