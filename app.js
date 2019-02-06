let container = document.getElementById("productos");
const telefono = "";

function fcnCargarProductos(){

    let result = '';
    let output = '';

    GlobalListaProductos.forEach(function(product){
        output += `
        <div class="card col-md-6">
            <div class="card-header">
                <div class="image-container" style="background-image: url(${product.URL})"></div>
            </div>
            <div class="card-body">
                <h6>${product.DESCRIPCION}</h6>
                <label>${product.DETALLES}</label>
                <b><h3 align="right">${product.PRECIO}</h3></b>
            </div>
            <div class="card-footer" align="right">
                <a href="#" class="btn btn-info btn-icon btn-round">
                    <i class="fa fa-facebook-square"></i>
                </a>
                <button class="btn btn-lg btn-round btn-success" align="right" onclick=
                    "fcnCargarWhatsapp('${product.CODPROD}','${product.DESCRIPCION}','${product.PRECIO}');">Pedir</button>
            </div>
        </div>
      `;
    });
    
    container.innerHTML = output;
};

function fcnCargarWhatsapp(codigo,descripcion,precio){
   window.location = "https://api.whatsapp.com/send?phone=502" + telefono + "&text=Hola,%20me%20interesa%20comprar%20el%20Articulo%20" + codigo + "%20-%20" + descripcion + "%20Precio:%20" + precio;
}

window.addEventListener('load', () =>{
    fcnCargarProductos();
})
