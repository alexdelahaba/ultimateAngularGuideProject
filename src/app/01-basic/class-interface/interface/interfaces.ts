export interface Film {
  director: string;
  presupuestoMultimillonario?: boolean;
  actor: Actor;
}

interface Actor {
  nombre: string;
  edad: number;
}
