import { Layout } from "@/components/app/layout"
import { ToasterContainer } from "@/components/app/toaster-container"
import { ClientSentry } from "@/components/wallet/client-sentry"
import { useMounted } from "@/libs/custom-hooks/use-mounted"
import { queryClient } from "@/libs/react-query"
import { swrConfig } from "@/libs/swr"
import { Loader } from "@/libs/ui/loader"
import { wagmiConfig } from "@/libs/wagmi"
import { QueryClientProvider } from "@tanstack/react-query"
import { type AppProps } from "next/app"
import { SWRConfig } from "swr"
import { WagmiConfig } from "wagmi"
import "../styles/styles.scss"

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useMounted()

  if (!isMounted) return <Loader />

  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SWRConfig value={swrConfig}>
          <ClientSentry />
          <ToasterContainer />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </QueryClientProvider>
    </WagmiConfig>
  )
}
