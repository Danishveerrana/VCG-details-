document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('accuracyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['First Test', 'Final Test'],
      datasets: [{
        label: 'Recognition Accuracy',
        data: [20, 95],
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        borderColor: '#00bcd4',
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
});

function downloadPDF() {
  const content = document.getElementById("abstract-content");
  html2pdf().from(content).save("Voice-Controlled-Graphics-Abstract.pdf");
}
