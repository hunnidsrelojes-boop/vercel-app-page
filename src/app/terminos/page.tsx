import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TÃ©rminos y Condiciones",
  description:
    "TÃ©rminos y condiciones de uso, compra, envÃ­os, garantÃ­a, cambios y protecciÃ³n de datos de HUNNIDS.",
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
          TÃ©rminos y Condiciones
        </h1>
        <p className="mt-5 text-sm font-light leading-relaxed text-gray">
          Ãšltima actualizaciÃ³n: {LAST_UPDATED}
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
              PodÃ©s contactarnos por WhatsApp al{" "}
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

          <Section title="2. AceptaciÃ³n de los tÃ©rminos">
            <p>
              El uso de este sitio y la realizaciÃ³n de cualquier compra implican la aceptaciÃ³n plena
              de estos TÃ©rminos y Condiciones. Si no estÃ¡s de acuerdo con ellos, te pedimos que no
              utilices el sitio ni realices operaciones. {SITE.name} podrÃ¡ modificar estos tÃ©rminos en
              cualquier momento; la versiÃ³n vigente serÃ¡ siempre la publicada en esta pÃ¡gina.
            </p>
          </Section>

          <Section title="3. Productos">
            <p>
              {SITE.name} comercializa relojes <strong className="font-medium text-off-white">100% originales</strong>,
              tanto nuevos como usados o refurbished/importados, de marcas reconocidas. Todos los
              productos son autÃ©nticos; no vendemos rÃ©plicas ni imitaciones.
            </p>
            <p>
              Las fotografÃ­as y descripciones son ilustrativas y buscan reflejar el producto con la
              mayor fidelidad posible. En el caso de relojes usados, cualquier marca de uso relevante
              se informa antes de la compra. La disponibilidad estÃ¡ sujeta a stock; algunos modelos se
              ofrecen bajo la modalidad &ldquo;por encargo&rdquo;.
            </p>
          </Section>

          <Section title="4. Precios">
            <p>
              Los precios se expresan en pesos argentinos (ARS), salvo que se indique lo contrario, y
              pueden modificarse sin previo aviso. El precio vÃ¡lido para cada operaciÃ³n es el
              confirmado al momento de coordinar la compra. En caso de un error tipogrÃ¡fico o de
              carga evidente en un precio, {SITE.name} se reserva el derecho de cancelar la operaciÃ³n y
              reintegrar cualquier importe abonado.
            </p>
          </Section>

          <Section title="5. Proceso de compra">
            <p>
              Las compras se coordinan y confirman a travÃ©s de nuestros canales de atenciÃ³n (WhatsApp
              e Instagram). En esa instancia se acuerdan el modelo, el precio final, el medio de pago y
              los datos de envÃ­o. La operaciÃ³n se considera perfeccionada una vez confirmado el pedido
              y recibido el pago correspondiente.
            </p>
          </Section>

          <Section title="6. Medios de pago">
            <p>
              Aceptamos mÃºltiples medios de pago. Las opciones disponibles y sus condiciones (por
              ejemplo, transferencia bancaria u otras alternativas) se informan al coordinar cada
              compra. Los pagos se procesan de forma segura y {SITE.name} no almacena datos sensibles de
              tarjetas ni cuentas.
            </p>
          </Section>

          <Section title="7. EnvÃ­os">
            <p>
              Realizamos <strong className="font-medium text-off-white">envÃ­o gratuito a todo el paÃ­s</strong>. Los
              plazos de entrega son estimados y dependen del destino y del correo o transporte
              utilizado. Una vez despachado el pedido, {SITE.name} no es responsable por demoras
              atribuibles al servicio de correo, aunque colaboramos en el seguimiento hasta la entrega.
            </p>
          </Section>

          <Section title="8. GarantÃ­a">
            <p>
              Todos nuestros relojes cuentan con una{" "}
              <strong className="font-medium text-off-white">garantÃ­a propia de 3 meses</strong> que cubre defectos de
              funcionamiento del movimiento. Algunos productos incluyen ademÃ¡s garantÃ­a internacional o
              extendida del fabricante, lo cual se informa en cada caso.
            </p>
            <p>
              La garantÃ­a no cubre: daÃ±os por mal uso, golpes, contacto con agua fuera de la resistencia
              especificada del modelo, manipulaciÃ³n o apertura por parte de terceros no autorizados,
              desgaste normal de uso, ni elementos consumibles como pila o malla. Para gestionar la
              garantÃ­a, escribinos por WhatsApp y te indicamos los pasos a seguir.
            </p>
          </Section>

          <Section title="9. Cambios, devoluciones y derecho de arrepentimiento">
            <p>
              De acuerdo con la Ley 24.240 de Defensa del Consumidor, en las compras a distancia el
              comprador tiene derecho a revocar la aceptaciÃ³n dentro de los{" "}
              <strong className="font-medium text-off-white">10 (diez) dÃ­as corridos</strong> contados a partir de la
              recepciÃ³n del producto, sin necesidad de expresar motivo y sin penalidad alguna.
            </p>
            <p>
              Para ejercer este derecho, el producto debe devolverse sin uso, en las mismas condiciones
              en que fue recibido y con su empaque y accesorios completos. Para iniciar una devoluciÃ³n o
              cambio, contactanos por WhatsApp dentro del plazo indicado y coordinaremos la logÃ­stica.
            </p>
          </Section>

          <Section title="10. Encargos y permutas">
            <p>
              Los pedidos bajo la modalidad &ldquo;por encargo&rdquo; pueden requerir una seÃ±a para su
              gestiÃ³n, la cual se informa previamente. Las permutas de relojes estÃ¡n sujetas a la
              evaluaciÃ³n previa del reloj ofrecido por el cliente y a la aceptaciÃ³n por parte de {SITE.name}.
            </p>
          </Section>

          <Section title="11. Propiedad intelectual">
            <p>
              La marca {SITE.name}, el logo, los textos, las fotografÃ­as y demÃ¡s contenidos de este sitio
              son propiedad de {SITE.name} y estÃ¡n protegidos por la legislaciÃ³n vigente. Queda prohibida
              su reproducciÃ³n o uso sin autorizaciÃ³n previa. Las marcas de los fabricantes de relojes
              mencionadas pertenecen a sus respectivos titulares.
            </p>
          </Section>

          <Section title="12. ProtecciÃ³n de datos personales">
            <p>
              Los datos personales que nos brindÃ¡s (como nombre, contacto y domicilio de envÃ­o) se
              utilizan Ãºnicamente para gestionar tu compra, coordinar el envÃ­o y mantener la
              comunicaciÃ³n. No comercializamos ni cedemos tus datos a terceros, salvo lo estrictamente
              necesario para concretar el pago o la entrega. El tratamiento de datos se realiza conforme
              a la Ley 25.326 de ProtecciÃ³n de Datos Personales. PodÃ©s solicitar el acceso, la
              rectificaciÃ³n o la supresiÃ³n de tus datos escribiÃ©ndonos por nuestros canales de contacto.
            </p>
          </Section>

          <Section title="13. Ley aplicable y jurisdicciÃ³n">
            <p>
              Estos TÃ©rminos y Condiciones se rigen por las leyes de la RepÃºblica Argentina. Ante
              cualquier conflicto, serÃ¡n competentes los tribunales que correspondan segÃºn la normativa
              de defensa del consumidor. El consumidor puede ademÃ¡s presentar reclamos ante la autoridad
              de aplicaciÃ³n de Defensa del Consumidor a travÃ©s de la Ventanilla Ãšnica Federal
              (consumidor.gob.ar).
            </p>
          </Section>

          <Section title="14. Contacto">
            <p>
              Ante cualquier duda sobre estos TÃ©rminos y Condiciones o sobre una compra, podÃ©s
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
