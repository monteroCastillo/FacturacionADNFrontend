import { AppPage } from '../app.po';
import { PlantaPage } from '../page/planta/planta.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { browser } from 'protractor';

describe('workspace-project Planta', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let planta: PlantaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    planta = new PlantaPage();
  });

  it('Deberia Crear una Planta', () => {

    const NOMBRE_PLANTA = 'Lengua de suegra';
    const DESCRIPCION_PLANTA = 'Planta con flor de hoja larga';
    const FECHA_INGRESO_PLANTA = '2022-07-13';
    const CANTIDAD_PLANTA = 10;
    const VALOR_PLANTA = 30000;
    const CATEGORIA_PLANTA = 'PLANTASINTERIOR';

    page.navigateTo();
    navBar.clickBotonPlanta();
    planta.clickBotonCrearPlanta();
    planta.ingresarNombre(NOMBRE_PLANTA);
    planta.ingresarDescripcion(DESCRIPCION_PLANTA);
    planta.ingresarFechaIngreso(FECHA_INGRESO_PLANTA);
    planta.ingresarCantidad(CANTIDAD_PLANTA);
    planta.ingresarValor(VALOR_PLANTA);
    planta.ingresarCategoria(CATEGORIA_PLANTA);
    browser.sleep(5000);
    planta.clickBotonGuardarPlanta();
    /* expect(1).toBe(planta.contarPlantas()); */

  });

  it('Deberia listar plantas', () => {
    page.navigateTo();
    navBar.clickBotonPlanta();
    expect(planta.contarPlantas()).toBe(1);
  });

});


