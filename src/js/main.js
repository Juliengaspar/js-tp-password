//test
//console.log('test');

(
    function () {
        const showMdp ={
            //elevee la class no-js
            enleverCLassElements : document.querySelector("html"),
            clickShowPasseElements : document.querySelector('.showPass'),
            imputeTypeElements : document.getElementById('password'),
            init(){
                this.enleverCLassElements.classList.toggle('no-js');
                console.log(this.enleverCLassElements);
                //Écoutez le clic sur l'élément .showPass.
                this.clickShowPasseElements.addEventListener('click', ()=>{
                    console.log('click');
                    if (this.imputeTypeElements.type === "password"){
                        this.imputeTypeElements.type = "textContent";
                    }else {
                        this.imputeTypeElements.type = "password";
                    }
                });

            },
        }
        showMdp.init();
    }
)();


/*
//elevee la class no-js
const enleverCLassElements = document.querySelector("html");
const clickShowPasseElements = document.querySelector('.showPass');
const  imputeTypeElements = document.getElementById('password');

enleverCLassElements.classList.toggle('no-js');
console.log(enleverCLassElements);


//Écoutez le clic sur l'élément .showPass.
clickShowPasseElements.addEventListener('click', ()=>{
    console.log('click');
    if (imputeTypeElements.type === "password"){
    imputeTypeElements.type = "textContent";
    }else {
    imputeTypeElements.type = "password";
    }
});


 */