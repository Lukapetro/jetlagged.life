import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Attrezzature da viaggio, robe da nerd e altre chicche scelte.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Attrezzature da viaggio, robe da nerd e altre chicche scelte."
      intro="Ci chiedono spesso quali strumenti utilizziamo per pianificare le nostre escursioni, restare ispirati o semplicemente per farci credere di essere produttivi mentre, in realtà, stiamo solo rimandando la partenza. Ecco una lista curata di tutto ciò che non può mancare nel nostro zaino."
    >
      <div className="space-y-20">
        <ToolsSection title="Roba nerd 🤓">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            Il passaggio al MacBook Pro da 16 pollici con chip M1 Max è stato
            epocale. Lavorare con 64GB di RAM ha trasformato la mia
            produttività: montaggi video, rendering e simulazioni di volo ora
            scivolano senza intoppi, senza mai sentire il bisogno di attivare le
            ventole, anche sotto carichi di lavoro che prima avrebbero messo in
            ginocchio il mio vecchio laptop Intel. La differenza è come il
            giorno e la notte.
          </Tool>
          <Tool title="GoPro HERO11 Black">
            La HERO11 Black è la fedele compagna delle mie avventure più
            estreme. La sua stabilizzazione è impeccabile, e la qualità dei
            video in 5.3K è sorprendente. Leggera, resistente e incredibilmente
            versatile, non ha mai mancato di catturare ogni momento, anche nei
            contesti più impervi.
          </Tool>
          <Tool title="DJI Mini 3 Pro">
            Il DJI Mini 3 Pro è il drone che ha rivoluzionato le mie riprese
            aeree. Con il suo peso piuma e la telecamera ad alta risoluzione,
            ogni volo diventa un&apos;opera d&apos;arte. È agile, silenzioso e
            sorprendentemente potente per le sue dimensioni, perfetto per
            immortalare paesaggi mozzafiato.
          </Tool>
          <Tool title="iPhone 13 Pro">
            Il mio iPhone è il centro di controllo mobile per tutte le mie
            esigenze in viaggio. Dalla navigazione ai pagamenti, dalla
            fotografia alla comunicazione, è lo strumento tuttofare che tiene
            insieme la mia vita digitale mentre sono in movimento. Con la sua
            interfaccia intuitiva e le sue capacità di elaborazione, è
            essenziale quanto il passaporto.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Kit da Esploratore 🧭">
          <Tool title="Zaino North Face Base Camp">
            Lo zaino North Face Base Camp è il baluardo che contiene la mia vita
            da nomade digitale. Robusto e spazioso, ma sorprendentemente
            confortevole, è progettato per resistere agli elementi e
            all&apos;usura del viaggio. Ogni tasca e cinghia è pensata per
            l&apos;avventuriero moderno che non si ferma davanti a nulla.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
