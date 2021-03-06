const app = { 
    option : document.querySelector("#option"), 
    form : document.querySelector("#form-option"),
    resultado: document.getElementById("resultado"),

    url : "app/app.php", 
    route : "",

    prepararFormulario : function(){
        let html = ""; 
        switch(this.option.value){ 
            case "1" : html = `
                <div class="form-group">
                    <label for="fahrenheit">Grados Fahrenheit</label>
                    <input class="form-control" id="fahrenheit" name="fahrenheit" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "2" : html = `
                <div class="form-group">
                    <label for="celsius">Grados Celsius</label>
                    <input class="form-control" id="celsius" name="celsius" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "3" : html = `
                <div class="form-group">
                    <label for="kilogramo">Kilogramos</label>
                    <input class="form-control" id="kilogramo" name="kilogramo" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "4" : html = `
                <div class="form-group">
                    <label for="libra">Libras</label>
                    <input class="form-control" id="libra" name="libra" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "5" : html = `
                <div class="form-group">
                    <label for="litro">Litros</label>
                    <input class="form-control" id="litro" name="litro" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "6" : html = `
                <div class="form-group">
                    <label for="galon">Galones</label>
                    <input class="form-control" id="galon" name="galon" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "7" : html = `
                <div class="form-group">
                    <label for="centimetro">Cent??metros</label>
                    <input class="form-control" id="centimetro" name="centimetro" type="number" step="any" placeholder="0.0">
                </div>
            `;break;

            case "8" : html = `
                <div class="form-group">
                    <label for="pulgada">Pulgadas</label>
                    <input class="form-control" id="pulgada" name="pulgada" type="number" step="any" placeholder="0.0">
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
                        
            case "2": this.route = "?caf"; 
                        let celsius = document.querySelector("#celsius").value;
                        datos.append("c", celsius);
                        break;
            case "3": this.route = "?kal"; 
                        let kilogramo = document.querySelector("#kilogramo").value;
                        datos.append("k", kilogramo);
                        break;
            case "4": this.route = "?lak"; 
                        let libra = document.querySelector("#libra").value;
                        datos.append("lb", libra);
                        break;
            case "5": this.route = "?lag"; 
                        let litro = document.querySelector("#litro").value;
                        datos.append("lt", litro);
                        break;
            case "6": this.route = "?gal"; 
                        let galon = document.querySelector("#galon").value;
                        datos.append("g", galon);
                        break;
            case "7": this.route = "?cap"; 
                        let centimetro = document.querySelector("#centimetro").value;
                        datos.append("ce", centimetro);
                        break;
            case "8": this.route = "?pac"; 
                        let pulgada = document.querySelector("#pulgada").value;
                        datos.append("p", pulgada);
                        break;

        }
        
        console.log(this.url + this.route);
        fetch(this.url + this.route, {
            method: "POST",
            body: datos
        }).then(response => response.json())
        .then( res=>{
            let html = "";
            switch(this.option.value){
                case "1" : html = `
                    <b>Celsius = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
                case "2" : html = `
                    <b>Fahrenheit = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
                case "3" : html = `
                    <b>Libras = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
                case "4" : html = `
                    <b>Kilogramos = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
                case "5" : html = `
                    <b>Galones = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
                case "6" : html = `
                    <b>Litros = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
//-----------------------------------------------------------------------

                case "7" : 
                html = `
                    <b>Pulgadas = </b>&nbsp;<u>${res.c}</u><br>
                    `;
                    break; //print

                    //<b>===== Tabla ======</b><br>
                    //<b>Cent??metros &nbsp; &nbsp; &nbsp; &nbsp; Pulgadas</b><br>
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c}</u><br>
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c[i]}</u><br>
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c+1}</u><br></br>

                    //html +`
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c}</u><br>
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c[i]}</u><br>
                    //${centimetro}<u>&nbsp;&nbsp;&nbsp;&nbsp;${res.c+1}</u><br>
                    //`;

//-----------------------------------------------------------------------
                case "8" : html = `
                    <b>Cent??metros = </b>&nbsp;<u>${res.c}</u><br>
                    `;break;
            }
            this.resultado.innerHTML = html + `<button class="btn btn-primary" onclick='limpiar_resultado()'>Limpiar</button> `;
        }).catch(err => console.error(err));
    }
};


function limpiar_resultado(){
    app.form.reset();
    app.resultado.innerHTML="";
}

window.onload = function(){
    app.option.addEventListener("change", ()=>app.prepararFormulario()); 

    app.form.addEventListener("submit", e => {
        e.preventDefault();
        e.stopPropagation();
        app.realizarCalculos();
    });
};
