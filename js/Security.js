class Security {

    constructor(){

        this.button1 = createButton('check');
        this.access1 = createInput('Code1');

        this.button2 = createButton('check');
        this.access2 = createInput('Code1');

        this.button3 = createButton('check');
        this.access3 = createInput('Code1');

        this.button1.mousePressed(() => {

            if(authenticate(accessCode1 , this.access1.value(    ))){
            this.button1.hide();
            this.access1.hide();
            score++

            }
        })

        this.button2.mousePressed(() => {

            if(authenticate(accessCode2 , this.access2.value(    ))){
            this.button2.hide();
            this.access2.hide();
            score++

            }
        })

        this.button3.mousePressed(() => {

            if(authenticate(accessCode3 , this.access3.value(    ))){
            this.button3.hide();
            this.access3.hide();
            score++

            }
        })


        function authenticate(actualCode , enteredCode)
{
if(actualCode === enteredCode){

  return true  
}else{

  return false 
}
}
    }

    display(){

        this.button1.position(100,110);
        this.access1.position(100,80);

        this.button2.position(700, 210);
        this.access2.position(700,180);

        this.button3.position(100,320);
        this.access3.position(100,290);


    }
}