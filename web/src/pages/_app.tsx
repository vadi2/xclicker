import React from 'react'
import { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";
import '../styles/index.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

