const app = { //Objeto

    //Prpiedades del objeto
    option : document.querySelector("#option"), //Apunta a figura en html
    form : document.querySelector("#form-option"),
    resultado: document.getElementById("resultado"), //Otra forma de obtener elemento

    url : "app/app.php", //recurso del BackEnd
    route : "",

    //prepararFormulario : function(){} //Metodo usando atributos anteponiendo this, recomendada.
    //prepararFormulario : () => {} //Metodo poniendo el nombre del objeto en vez de this.app.atributo.
    //prepararFormulario(){} //Metodo cambia su forma de trabajar en su propio contexto parecio al primero.

    prepararFormulario : function(){
        let html = ""; //let = variable de declaración de objeto
        switch(this.option.value){ //en base al value de la figura
            case "1" : html = `
                <div class="form-group">
                    <label for="fahrenheit">Grados Fahrenheit</label>
                    <input class="form-control" id="fahrenheit" name="fahrenheit" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "2" : html = `
                <div class="form-group">
                    <label for="kilogramo">Kilogramos</label>
                    <input class="form-control" id="kilogramo" name="kilogramo" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

        } 
        this.form.innerHTML = html + `<button type="submit" class="btn btn-primary"> Calcular </button>`;
    }, 

    realizarCalculos : function(){ 

        let datos = new FormData();
        switch( this.option.value ){
            
            case "1": this.route = "?fac"; 
                        let fahrenheit = document.querySelector("#fahrenheit").value;
                        datos.append("f", fahrenheit);
                        break;

        }
        
        console.log(this.url + this.route);
        fetch(this.url + this.route, {
            method: "POST",
            body: datos
        }).then(response => response.json())
        .then( res=>{
            let html = `
            <b>Conversion = </b>&nbsp;<u>${res.c}</u><br>
            `;
            this.resultado.innerHTML = html;

        }).catch(err => console.error(err));
    }
};

window.onload = function(){
    app.option.addEventListener("change", ()=>app.prepararFormulario()); //seleccionar el circulo del pagina para aplicar el change y realizar el metodo

    app.form.addEventListener("submit", e => {
        e.preventDefault();
        e.stopPropagation();
        app.realizarCalculos();
    });
};

//faltan crear metodos de calculo

/*

~ COMENTARIOS ~

-Se pueden seleccionar varios div o form etc haciendo selección bytag y modificar todos elementos con esa
etiqueta.

- . por clase
- # por id
- jquery reemplaza a queerySelector
- ` acento frances te permite hacer interpolaciones

*/