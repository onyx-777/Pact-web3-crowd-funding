import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
