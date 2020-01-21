import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit, OnChanges {
  /**
   * 
   * @property dato obtenido desde el componente padre
   */
  @Input() datval: Boolean;

  /**
   * 
   * @property envia los datos al componente padre
   */
  @Output() datos = new EventEmitter();
  
  /**
   * 
   * @property guarda el tipo de discapasidad
   */
  public tipo: FormControl;

  /**
   * 
   * @property guarda el nivel de discapasidad
   */
  public nivel: FormControl;

  /**
   * 
   * @property guarda el numero de carnet de discapasidad
   */
  public carnet: FormControl;

  /**
   * 
   * @constructor
   */
  constructor() { 
    this.tipo = new FormControl('');
    this.nivel = new FormControl(0);
    this.carnet = new FormControl('');
  }

  /**
   * 
   * @function gnOnInit
   */
  ngOnInit() {
  }

  /**
   * 
   * @function gnOnChanges
   * @param changes administra los cambios en el elemento
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.datval);
  }

  /**
   * 
   * envia los datos al componente padre
   * @function onOk
   */
  onOk() {
    var dat = {
      tipo: this.tipo.value ? this.tipo.value : '',
      nivel: this.nivel.value ? this.nivel.value : 0,
      carnet: this.carnet.value ? this.carnet.value : ''
    }
    this.datos.emit(dat);
  }

}
