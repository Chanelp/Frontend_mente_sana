// psicologos.service.ts
export interface Psicologo {
  id: number;
  nombre: string;
  profesion: string;
  descripcion: string;
}

export class PsicologosService {
  constructor() { }

  obtenerPsicologos(): Psicologo[] {
    return [
      { id: 1, nombre: 'Juan Pérez', profesion: 'Psicólogo Clínico', descripcion: 'Descripción de Juan Pérez...' },
      { id: 2, nombre: 'María Rodríguez', profesion: 'Psicóloga Escolar', descripcion: 'Descripción de María Rodríguez...' },
      // ...
    ];
  }
}
