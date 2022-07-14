import {by, element } from 'protractor';

export class PlantaPage{
  private linkCrearPlanta = element(by.id('botonCrearPlanta'));
  private linkListarPlanta = element(by.id('tablaListaPlantas'));
  private inputNombrePlanta = element(by.id('planta-nombre'));
  private inputDescripcionPlanta = element(by.id('planta-descripcion'));
  private inputFechaIngreso = element(by.id('planta-fechaIngreso'));
  private inputCantidadPlanta = element(by.id('planta-cantidad'));
  private inputValorPlanta = element(by.id('planta-valor'));
  private inputCategoriaPlanta = element(by.id('planta-categoria'));
  private listaPlanta = element.all(by.id('tablaListaPlantas'));
  private guardarPlanta = element(by.id('guardarPlanta'));

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
    return this.listaPlanta.count();
  }

  async clickBotonGuardarPlanta() {
    await this.guardarPlanta.click();
  }

}
