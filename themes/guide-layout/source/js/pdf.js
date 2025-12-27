async function generatePDF() {
    const btn = document.querySelector('.download-btn');
    btn.innerHTML = '正在生成...';
    
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pages = document.querySelectorAll('.page');

    for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], { scale: 2 });
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
    }
    
    pdf.save('Hexo_Guide_Manual.pdf');
    btn.innerHTML = '下载PDF';
}