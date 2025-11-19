/*document.documentElement.classList.add('js-enabled');
//document.documentElement.className ='js-enabled';//desctructive
//document.documentElement.className +='js-enabled'

const passwordtElement =document.getElementById('passwordElement');
//const passwordtElement =document.getElementById('passwordElement').type;//a ne jamais faire grosse erreur cachée
//const passwordtElement ="password";//a ne jamais faire grosse erreur, car le nom de la variable dit que c'est de type elements alors que ce sont des chaines de caractères
const buttonElement = document.querySelector('.showPass');

buttonElement.addEventListener('click', (evt) => {
   if (passwordtElement.type === 'password') {
       passwordtElement.type = 'text';
//evt.currentTarget.textContent = buttonElement.dataset.hideText;// ceci restera en français si modification de langue pour mieux le faire c'est d'ne faire un data atribut le problemen on a paerdus la valeur montrer dans le text ==> solution permutations de valeur
   }else{
       passwordtElement.type = 'password';
       //buttonElement.type = 'Montrer';
      // evt.currentTarget.textContent = 'Montrer';
   }
[evt.currentTarget.textContent, evt.currentTarget.dataset.hideText] = [evt.currentTarget.dataset.hideText, evt.currentTarget.textContent];// ceci est une permutation de valeur sans perdres des valeurs

});

 */
(
     ()=> {
        const app = {

            //propreiter et des methodes
            passwordtElement :document.getElementById('passwordElement'),
            buttonElement : document.querySelector('.showPass'),


            init() {
                document.documentElement.classList.add('js-enabled');

                this.buttonElement.addEventListener('click', (evt) => {
                    if (this.passwordtElement.type === 'password') {
                        this.passwordtElement.type = 'text';
//evt.currentTarget.textContent = buttonElement.dataset.hideText;// ceci restera en français si modification de langue pour mieux le faire c'est d'ne faire un data atribut le problemen on a paerdus la valeur montrer dans le text ==> solution permutations de valeur
                    }else{
                        this.passwordtElement.type = 'password';
                        //buttonElement.type = 'Montrer';
                        // evt.currentTarget.textContent = 'Montrer';
                    }
                    [evt.currentTarget.textContent, evt.currentTarget.dataset.hideText] = [evt.currentTarget.dataset.hideText, evt.currentTarget.textContent];// ceci est une permutation de valeur sans perdres des valeurs

                });
            }


        }
        app.init();
    }
)();

