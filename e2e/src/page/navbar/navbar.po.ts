import { by, element } from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkPlanta = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkProveedor = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
  linkFactura = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

  async clickBotonPlanta() {
    await this.linkPlanta.click();
  }

  async clickBotonProveedor() {
    await this.linkProveedor.click();
  }

  async clickBotonFactura() {
    await this.linkFactura.click();
  }
}
