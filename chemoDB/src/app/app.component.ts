import { Component, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  public industria: { [key: string]: Object }[] = [
    { IndustriaName: 'Alimentaria', IndustriaId: '1' },
    { IndustriaName: 'Otros', IndustriaId: '2' }
  ];
  public solucion: { [key: string]: Object }[] = [
    {SolucionName: 'Zumo de Naranja', IndustriaId: '1', SolucionId: '100'},
    {SolucionName: 'Zumo de Maracuyá', IndustriaId: '1', SolucionId: '101'},
    {SolucionName: 'Zumo de Manzana', IndustriaId: '1', SolucionId: '102'},
    {SolucionName: 'Zumo de Mango', IndustriaId: '1', SolucionId: '103'},
    {SolucionName: 'Zumo de Piña', IndustriaId: '1', SolucionId: '104'},
    {SolucionName: 'Zumo de Limón', IndustriaId: '1', SolucionId: '105'},
    {SolucionName: 'Zumo de Tamarindo', IndustriaId: '1', SolucionId: '106'},
    {SolucionName: 'Zumo de Pera', IndustriaId: '1', SolucionId: '107'},
    {SolucionName: 'Zumo de Tomate', IndustriaId: '1', SolucionId: '108'},
    {SolucionName: 'Zumo de Mora', IndustriaId: '1', SolucionId: '109'},
    {SolucionName: 'Zumo de Toronja', IndustriaId: '1', SolucionId: '110'},
    {SolucionName: 'Zumo de Durazno', IndustriaId: '1', SolucionId: '111'},
    {SolucionName: 'Zumo de Mandarina', IndustriaId: '1', SolucionId: '112'},
    {SolucionName: 'Zumo de Caña de Azúcar', IndustriaId: '1', SolucionId: '113'},
    {SolucionName: 'Pasta de Tomate', IndustriaId: '1', SolucionId: '114'},
    {SolucionName: 'Leche', IndustriaId: '1', SolucionId: '115'},
    {SolucionName: 'Pasta de Tomate', IndustriaId: '1', SolucionId: '116'},
    {SolucionName: 'Solución acouosa de Sacarosa', IndustriaId: '1', SolucionId: '117'},
    {SolucionName: 'pruebasss', IndustriaId: '2', SolucionId: '118'},
    {SolucionName: 'pruebass22', IndustriaId: '2', SolucionId: '119'},
  ];
  public propiedad: { [key: string]: Object }[] = [
    { PropiedadName: 'Aberdeen', SolucionId: '103', PropiedadId: 207 },
    { PropiedadName: 'Alexandria', SolucionId: '102', PropiedadId: 204 },
  ];
  public industriaFields: Object = { value: 'IndustriaId', text: 'IndustriaName' };
  public solucionFields: Object = { value: 'SolucionId', text: 'SolucionName' };
  public propiedadFields: Object = { value: 'PropiedadId', text: 'PropiedadName' };
  public industriaWaterMark: string = 'Seleccione Industria';
  public solucionWaterMark: string = 'Seleccione Solución';
  public propiedadWaterMark: string = 'Seleccione Propiedad Termodinámica';
  @ViewChild('industriaList')
  public industriaObj: DropDownListComponent;
  @ViewChild('solucionList')
  public solucionObj: DropDownListComponent;
  @ViewChild('propiedadList')
  public propiedadObj: DropDownListComponent;
  public onChange1(): void {
    this.solucionObj.enabled = true;
    let tempQuery: Query = new Query().where('IndustriaId', 'equal', this.industriaObj.value);
    this.solucionObj.query = tempQuery;
    this.solucionObj.text = null;
    this.solucionObj.dataBind();
    this.propiedadObj.text = null;
    this.propiedadObj.enabled = false;
    this.propiedadObj.dataBind();
  }
  public onChange2(): void {
    this.propiedadObj.enabled = true;
    let tempQuery1: Query = new Query().where('SolucionId', 'equal', this.solucionObj.value);
    this.propiedadObj.query = tempQuery1;
    this.propiedadObj.text = null;
    this.propiedadObj.dataBind();
  }
  clear(){
    this.industriaObj.value = null;
    this.solucionObj.value = null;
    this.propiedadObj.value = null;
  }
}