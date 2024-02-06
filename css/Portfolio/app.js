var typed = new Typed('#element', {
    strings: ['ML Engineer', 'Cloud Engineer', ' passionate Web Developer'],
    typeSpeed: 50,
  });

const rsm = document.querySelector('#resume')

rsm.addEventListener('click', () => {
    const resumeURL = 'https://drive.google.com/file/d/1UsLgvARBWlsX9qVnCRE2kgepDD_MK8vv/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'your_resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    

})