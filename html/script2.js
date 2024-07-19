const container = document.getElementById('earth'); // Replace with actual ID of your div

function getSvgContent(url) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(data, 'image/svg+xml');
      return svgDoc;
    });
}

async function initHoverEffect() {
  try {
    const svgDoc = await getSvgContent('../images/svgs/world4.svg'); // Replace with path to your SVG
    const targetPath = svgDoc.getElementById('earth');
    
    if (targetPath) {
      container.addEventListener('mouseover', () => {
        targetPath.style.fill = 'red'; // Change fill color on hover (you can customize this)
      });
  
      container.addEventListener('mouseout', () => {
        targetPath.style.fill = 'black'; // Reset fill color on mouseout (you can customize this)
      });
    } else {
      console.error('Path with ID "earth" not found in SVG');
    }
  } catch (error) {
    console.error('Error fetching SVG:', error);
  }
}

initHoverEffect();
