import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "@/components/Header";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { ThemeProvider, useTheme } from "@/hooks/useTheme";

export const Layout = ({ Component, pageProps }: AppProps) => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1abc9c",
      },
      background: {
        default: "#f2f5f8", // 默认背景色
        paper: "#ffffff", // 对话框等容器的背景色
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1abc9c",
      },
      background: {
        default: "#181c27", // 默认背景色
        paper: "#252d38", // 对话框等容器的背景色
      },
    },
  });

  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>rogue-blog</title>
        <meta
          name="description"
          content="Welcome to my blog. Here you will find articles on various topics."
        />
      </Head>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
};

const App = (appProps: AppProps) => {
  return (
    <ThemeProvider>
      <Layout {...appProps}></Layout>
    </ThemeProvider>
  );
};

export default App;
