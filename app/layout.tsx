import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import './global.css';
import { GlobeIcon } from 'lucide-react';
import { SiDiscord, SiGithub } from 'react-icons/si';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

const TITLE = "Whendarr Documentation";
const DESCRIPTION = "Documentation for Whendarr - A lightweight web calendar for *arrs aggregating tv and movie releases into a fast, shareable monthly view.";
const DESCRIPTION_SHORT = "Documentation for Whendarr - A lightweight web calendar for *arrs aggregating tv and movie releases.";

export const metadata: Metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    metadataBase: new URL("https://docs.whendarr.com"),
    title: {
        default: TITLE,
        template: "%s | Whendarr Docs"
    },
    description: DESCRIPTION,
    keywords: [
        "Whendarr",
        TITLE,
        "Sonarr calendar",
        "Radarr calendar",
        "Docker installation",
        "self-hosted",
        "Release calendar",
        "Aggregate calendar"
    ],
    authors: [{ name: "Whendarr", url: "https://github.com/anthony-mariotti/whendarr" }, { name: "Anthony Mariotti", url: "https://github.com/anthony-mariotti" }],
    creator: "Whendarr",
    publisher: "Whendarr",
    robots: {
        // TODO: CHANGE ON RELEASE
        index: false,
        follow: false
    },
    // manifest: "/site.webmanifest",
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: "Whendarr Docs",
        url: "https://docs.whendarr.com",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION_SHORT,
        images: []
    },
    alternates: {
        canonical: "https://docs.whendarr.com"
    }
};

const banner = (
    <Banner dismissible={false}>
        Documentation is Work in Progress. Whendarr is still Privated
    </Banner>
);
const navbar = (
    <Navbar
        logo={
            <div className="items-ceter flex gap-2">
                {/* <Image src="logo-optimized.svg" alt="Whendarr" width={32} height={32} unoptimized /> */}
                <span className="text-lg font-bold">Whendarr</span>
            </div>
        }
    // ... Your additional navbar options
    />
);
const footer = (
    <Footer className="flex flex-col items-center gap-4 py-6">
        <span>
            Open source with{' '}
            <a
                href="https://github.com/anthony-mariotti/whendarr/blob/main/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
                AGPL-3.0
            </a>
        </span>
        <div className="flex items-center gap-6">
            <a
                href="https://whendarr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
                <GlobeIcon className="size-4" />
                Website
            </a>
            <a
                href="https://github.com/anthony-mariotti/whendarr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
                <SiGithub className="size-4" />
                GitHub
            </a>
            <a
                href="https://discord.gg/0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
                <SiDiscord className="size-4" />
                Discord
            </a>
        </div>
    </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
                color={{
                    hue: 292,
                    saturation: 63,
                    lightness: {
                        light: 45,
                        dark: 56
                    }
                }}
                backgroundColor={{
                    dark: '#222222',
                    light: '#F2F2F2'
                }}
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/anthony-mariotti/whendarr-docs/tree/main"
                    footer={footer}
                // ... Your additional layout options
                >
                    {children}
                </Layout>
                <Analytics />
            </body>
        </html>
    );
}
