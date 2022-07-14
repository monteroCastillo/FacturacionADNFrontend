import {AppPage} from '../app.po';
import { ProveedorPage } from '../page/proveedor/proveedor.po';
import { NavbarPage } from '../page/navbar/navbar.po';

describe('workspace-project Proveedor', () =>{
  let page: AppPage;
  let navBar: NavbarPage;
  let proveedor: ProveedorPage;

  beforeEach(() =>{
    page = new AppPage();
    navBar = new NavbarPage();
    proveedor = new ProveedorPage();
  });


  it('Deberia crear un proveedor', () =>{
    const NOMBRE_PROVEEDOR = 'profrutales';
    const DIRECCION_PROVEEDOR = 'Villagorgona';
    const TELEFONO_PROVEEDOR = '8794156';
    const PAGINA_WEB_PROVEEDOR = 'profrutales.com.co';

    page.navigateTo();
    navBar.clickBotonProveedor();
    proveedor.clickBotonCrearProveedores();
    proveedor.ingresarNombre(NOMBRE_PROVEEDOR);
    proveedor.ingresarDireccion(DIRECCION_PROVEEDOR);
    proveedor.ingresarTelefono(TELEFONO_PROVEEDOR);
    proveedor.ingresarPaginaWeb(PAGINA_WEB_PROVEEDOR);
    proveedor.clickBotonCrearProveedores();

    expect(1).toBe(proveedor.contarProveedores());
  });

  it('Deberia listar Proveedores', ()=>{
    page.navigateTo();
    navBar.clickBotonProveedor();
    expect(proveedor.contarProveedores()).toBe(1);
  });
});



