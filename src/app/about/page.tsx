import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={twMerge(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    'Siamo gli Spiriti Liberi di Jetlagged.life. Viviamo per il viaggio, disegniamo mappe di sogni.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Siamo gli Spiriti Liberi di Jetlagged.life. Viviamo per il viaggio,
            disegniamo mappe di sogni.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Da bambini, costruivamo astronavi con scatole di cartone e
              immaginavamo mondi al di là delle stelle. Ogni angolo della nostra
              città natale era un nuovo pianeta da esplorare. Abbiamo
              programmato la nostra prima avventura prima ancora di sapere cosa
              fosse un GPS, affidandoci alle bussole di carta che disegnavamo
              noi stessi.
            </p>
            <p>
              La nostra passione per l&apos;esplorazione ci ha spesso portati a
              salire sugli alberi più alti, immaginando di toccare il cielo. Con
              caschi troppo grandi e sguardi determinati, abbiamo mirato alle
              stelle, anche se a volte ciò significava cadere e rialzarci con
              qualche graffio in più.
            </p>
            <p>
              Le estati della nostra adolescenza sono state trascorse tra mappe
              e diari di viaggio, mentre i nostri sogni si elevavano oltre
              l&apos;atmosfera terrestre. Con ingegno e qualche tentativo
              audace, abbiamo inviato simbolicamente i nostri messaggi in
              bottiglia digitale nelle orbite dell&apos;immaginazione.
            </p>
            <p>
              Oggi, insieme in <b>Jetlagged.life</b>, ci dedichiamo a
              condividere questa passione con il mondo. Non offriamo soltanto
              consigli di viaggio: forniamo il passaporto per trasformare i
              cortili in portali verso avventure senza limiti. Perché per noi,
              ogni viaggiatore è un astronauta del quotidiano, e ogni
              destinazione è un piccolo passo verso l&apos;infinito.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Seguici su Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Seguici su Instagram
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Seguici su LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:info@jetlagged.life"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              info@jetlagged.life
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
