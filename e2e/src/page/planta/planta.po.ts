import {by, element } from 'protractor';

export class PlantaPage{
  private linkCrearPlanta = element(by.id('linkCrearPlanta'));
  private linkListarPlanta = element(by.id('linkListarPlanta'));
  private inputNombrePlanta = element(by.id('nombre'));
  private inputDescripcionPlanta = element(by.id('descripcion'));
  private inputFechaIngreso = element(by.id('fechaIngreso'));
  private inputCantidadPlanta = element(by.id('cantidad'));
  private inputValorPlanta = element(by.id('valor'));
  private inputCategoriaPlanta = element(by.id('categoria'));
  private listaPlanta = element.all(by.id('plantas'));
  private guardarPlanta = element(by.id('botonGuardar'));

  async clickBotonCrearPlanta(){
    await this.linkCrearPlanta.click();
  }

  async clickBotonListarPlanta(){
    await this.linkListarPlanta.click();
  }

  async ingresarNombre(nombre){
    await this.inputNombrePlanta.sendKeys(nombre);
  }

  async ingresarDescripcion(descripcion){
    await this.inputDescripcionPlanta.sendKeys(descripcion);
  }

  async ingresarFechaIngreso(fechaIngreso){
    await this.inputFechaIngreso.sendKeys(fechaIngreso);
  }

  async ingresarCantidad(cantidad){
    await this.inputCantidadPlanta.sendKeys(cantidad);
  }

  async ingresarValor(valor){
    await this.inputValorPlanta.sendKeys(valor);
  }

  async ingresarCategoria(categoria){
    await this.inputCategoriaPlanta.sendKeys(categoria);
  }

  async contarPlantas(){
    await this.listaPlanta.count();
  }

  async clickBotonGuardarPlanta() {
    await this.guardarPlanta.click();
  }

}
