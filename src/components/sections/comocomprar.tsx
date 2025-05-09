
import { ShoppingCart, CheckCircle, Truck } from 'lucide-react';

export function ComoComprar() {
  return (
    <section className="py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            ¿Cómo comprar en la Tienda Oficial?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Seguí estos simples pasos para hacer tu compra y llevarte los colores del Club Atlético Libertad a casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Paso 1 */}
          <div className="p-6 border border-border rounded-xl shadow-lg hover:shadow-primary/30 transition-shadow duration-300 bg-card">
            <div className="text-accent mb-4">
              <ShoppingCart className="w-12 h-12 mx-auto" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">1. Elegí tu producto</h3>
            <p className="text-muted-foreground">
              Explorá camisetas, bufandas y más en nuestro catálogo oficial.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="p-6 border border-border rounded-xl shadow-lg hover:shadow-primary/30 transition-shadow duration-300 bg-card">
            <div className="text-accent mb-4">
              <CheckCircle className="w-12 h-12 mx-auto" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">2. Confirmá tu compra</h3>
            <p className="text-muted-foreground">
              Agregá al carrito y completá los datos de contacto o pago según disponibilidad.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="p-6 border border-border rounded-xl shadow-lg hover:shadow-primary/30 transition-shadow duration-300 bg-card">
            <div className="text-accent mb-4">
              <Truck className="w-12 h-12 mx-auto" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">3. Recibí en tu hogar</h3>
            <p className="text-muted-foreground">
              Coordinamos contigo para retiro o envío en Canelones y alrededores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
