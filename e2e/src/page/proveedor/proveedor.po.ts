import {by, element}from 'protractor';

export class ProveedorPage {
  private linkCrearProveedor = element(by.id('linkCrearProveedor'));
  private linkListarProveedor = element(by.id('linkListarProveedor'));
  private inputIdProveedor = element(by.id('id'));
  private inputNombreProveedor = element(by.id('nombre'));
  private inputDireccionProveedor = element(by.id('direccion'));
  private inputTelefonoProveedor = element(by.id('telefono'));
  private inputPaginaWebProveedor = element(by.id('paginaWeb'));
  private listaProveedores = element.all(by.id('proveedores'));
  private guardarProveedor = element(by.id('guardarPlanta'));

  async clickBotonCrearProveedores(){
    await this.linkCrearProveedor.click();
  }

  async clickBotonListarProveedores(){
    await this.linkListarProveedor.click();
  }

  async ingresarId(id){
    await this.inputIdProveedor.sendKeys(id);
  }

  async ingresarNombre(nombre){
    await this.inputNombreProveedor.sendKeys(nombre);
  }

  async ingresarDireccion(direccion){
    await this.inputDireccionProveedor.sendKeys(direccion);
  }

  async ingresarTelefono(telefono){
    await this.inputTelefonoProveedor.sendKeys(telefono);
  }

  async ingresarPaginaWeb(paginaWeb){
    await this.inputPaginaWebProveedor.sendKeys(paginaWeb);
  }

  async contarProveedores(){
    return this.listaProveedores.count();
  }

  async clickBotonGuardarProveedor(){
    await this.guardarProveedor.click();
  }




}
