import { ChakraProvider } from '@chakra-ui/react';
import './styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { theme } from './_configs/chakraThemeConfig';
import ChakraProviderWrapper from './_providers/chakraProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bugbounty Application',
  description: 'See lists of bounties',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
      </body>
    </html>
  );
}
