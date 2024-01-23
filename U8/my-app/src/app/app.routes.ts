import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Component } from '@angular/core';
import { pruebaguardGuard } from './pruebaguard.guard';

export const routes: Routes = [
    {path: 'cuerpo', component: CuerpoComponent},
    {path: 'detalle/:id', component: DetalleComponent, canActivate:[pruebaguardGuard]}
];
