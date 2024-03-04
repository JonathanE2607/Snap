const file = document.getElementById('foto');
file.addEventListener('change', e =>{
    console.log(e.target.files[0]);
})