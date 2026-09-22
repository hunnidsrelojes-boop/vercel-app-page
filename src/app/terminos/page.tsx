import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso, compra, envíos, garantía, cambios y protección de datos de HUNNIDS.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "22 de septiembre de 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-serif text-2xl font-light text-off-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-gray sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function TerminosPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}`;

  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-silver transition-colors hover:text-off-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Volver al inicio
        </Link>

        <span className="mt-10 block text-[11px] font-medium uppercase tracking-[0.3em] text-silver">
          Legal
        </span>
        <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-off-white sm:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mt-5 text-sm font-light leading-relaxed text-gray">
          Última actualización: {LAST_UPDATED}
        </p>

        <div className="mt-14 space-y-12">
          <Section title="1. Titular del sitio">
            <p>
              Este sitio web es operado por <strong className="font-medium text-off-white">{SITE.name}</strong>{" "}
              (en adelante, &ldquo;{SITE.name}&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;el vendedor&rdquo;), una tienda de
              relojes con base en Mar del Plata, Provincia de Buenos Aires, Argentina, que opera de
              forma exclusivamente online.
            </p>
            <p>
              Podés contactarnos por WhatsApp al{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                +54 9 223 454 7845
              </a>{" "}
              o por Instagram en{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                @{SITE.instagramHandle}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Aceptación de los términos">
            <p>
              El uso de este sitio y la realización de cualquier compra implican la aceptación plena
              de estos Términos y Condiciones. Si no estás de acuerdo con ellos, te pedimos que no
              utilices el sitio ni realices operaciones. {SITE.name} podrá modificar estos términos en
              cualquier momento; la versión vigente será siempre la publicada en esta página.
            </p>
          </Section>

          <Section title="3. Productos">
            <p>
              {SITE.name} comercializa relojes <strong className="font-medium text-off-white">100% originales</strong>,
              tanto nuevos como usados o refurbished/importados, de marcas reconocidas. Todos los
              productos son auténticos; no vendemos réplicas ni imitaciones.
            </p>
            <p>
              Las fotografías y descripciones son ilustrativas y buscan reflejar el producto con la
              mayor fidelidad posible. En el caso de relojes usados, cualquier marca de uso relevante
              se informa antes de la compra. La disponibilidad está sujeta a stock; algunos modelos se
              ofrecen bajo la modalidad &ldquo;por encargo&rdquo;.
            </p>
          </Section>

          <Section title="4. Precios">
            <p>
              Los precios se expresan en pesos argentinos (ARS), salvo que se indique lo contrario, y
              pueden modificarse sin previo aviso. El precio válido para cada operación es el
              confirmado al momento de coordinar la compra. En caso de un error tipográfico o de
              carga evidente en un precio, {SITE.name} se reserva el derecho de cancelar la operación y
              reintegrar cualquier importe abonado.
            </p>
          </Section>

          <Section title="5. Proceso de compra">
            <p>
              Las compras se coordinan y confirman a través de nuestros canales de atención (WhatsApp
              e Instagram). En esa instancia se acuerdan el modelo, el precio final, el medio de pago y
              los datos de envío. La operación se considera perfeccionada una vez confirmado el pedido
              y recibido el pago correspondiente.
            </p>
          </Section>

          <Section title="6. Medios de pago">
            <p>
              Aceptamos múltiples medios de pago. Las opciones disponibles y sus condiciones (por
              ejemplo, transferencia bancaria u otras alternativas) se informan al coordinar cada
              compra. Los pagos se procesan de forma segura y {SITE.name} no almacena datos sensibles de
              tarjetas ni cuentas.
            </p>
          </Section>

          <Section title="7. Envíos">
            <p>
              Realizamos <strong className="font-medium text-off-white">envío gratuito a todo el país</strong>. Los
              plazos de entrega son estimados y dependen del destino y del correo o transporte
              utilizado. Una vez despachado el pedido, {SITE.name} no es responsable por demoras
              atribuibles al servicio de correo, aunque colaboramos en el seguimiento hasta la entrega.
            </p>
          </Section>

          <Section title="8. Garantía">
            <p>
              Todos nuestros relojes cuentan con una{" "}
              <strong className="font-medium text-off-white">garantía propia de 3 meses</strong> que cubre defectos de
              funcionamiento del movimiento. Algunos productos incluyen además garantía internacional o
              extendida del fabricante, lo cual se informa en cada caso.
            </p>
            <p>
              La garantía no cubre: daños por mal uso, golpes, contacto con agua fuera de la resistencia
              especificada del modelo, manipulación o apertura por parte de terceros no autorizados,
              desgaste normal de uso, ni elementos consumibles como pila o malla. Para gestionar la
              garantía, escribinos por WhatsApp y te indicamos los pasos a seguir.
            </p>
          </Section>

          <Section title="9. Cambios, devoluciones y derecho de arrepentimiento">
            <p>
              De acuerdo con la Ley 24.240 de Defensa del Consumidor, en las compras a distancia el
              comprador tiene derecho a revocar la aceptación dentro de los{" "}
              <strong className="font-medium text-off-white">10 (diez) días corridos</strong> contados a partir de la
              recepción del producto, sin necesidad de expresar motivo y sin penalidad alguna.
            </p>
            <p>
              Para ejercer este derecho, el producto debe devolverse sin uso, en las mismas condiciones
              en que fue recibido y con su empaque y accesorios completos. Para iniciar una devolución o
              cambio, contactanos por WhatsApp dentro del plazo indicado y coordinaremos la logística.
            </p>
          </Section>

          <Section title="10. Encargos y permutas">
            <p>
              Los pedidos bajo la modalidad &ldquo;por encargo&rdquo; pueden requerir una seña para su
              gestión, la cual se informa previamente. Las permutas de relojes están sujetas a la
              evaluación previa del reloj ofrecido por el cliente y a la aceptación por parte de {SITE.name}.
            </p>
          </Section>

          <Section title="11. Propiedad intelectual">
            <p>
              La marca {SITE.name}, el logo, los textos, las fotografías y demás contenidos de este sitio
              son propiedad de {SITE.name} y están protegidos por la legislación vigente. Queda prohibida
              su reproducción o uso sin autorización previa. Las marcas de los fabricantes de relojes
              mencionadas pertenecen a sus respectivos titulares.
            </p>
          </Section>

          <Section title="12. Protección de datos personales">
            <p>
              Los datos personales que nos brindás (como nombre, contacto y domicilio de envío) se
              utilizan únicamente para gestionar tu compra, coordinar el envío y mantener la
              comunicación. No comercializamos ni cedemos tus datos a terceros, salvo lo estrictamente
              necesario para concretar el pago o la entrega. El tratamiento de datos se realiza conforme
              a la Ley 25.326 de Protección de Datos Personales. Podés solicitar el acceso, la
              rectificación o la supresión de tus datos escribiéndonos por nuestros canales de contacto.
            </p>
          </Section>

          <Section title="13. Ley aplicable y jurisdicción">
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Ante
              cualquier conflicto, serán competentes los tribunales que correspondan según la normativa
              de defensa del consumidor. El consumidor puede además presentar reclamos ante la autoridad
              de aplicación de Defensa del Consumidor a través de la Ventanilla Única Federal
              (consumidor.gob.ar).
            </p>
          </Section>

          <Section title="14. Contacto">
            <p>
              Ante cualquier duda sobre estos Términos y Condiciones o sobre una compra, podés
              escribirnos por{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                WhatsApp
              </a>{" "}
              o por{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                Instagram
              </a>
              . Estamos para ayudarte.
            </p>
          </Section>
        </div>
      </div>
    </Container>
  );
}
