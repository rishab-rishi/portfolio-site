<script>import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "../app.css";
import favicon from '$lib/assets/favicon.svg';

let { children } = $props();</script>

<svelte:head>
	<link rel="icon" href="{favicon}" />
	<title>Rishab — Full-stack developer</title>
	<meta name="description" content="Rishab is a full-stack developer building production-ready web applications with Next.js, TypeScript and PostgreSQL, from idea to deployment." />
	<meta property="og:title" content="Rishab — Full-stack developer" />
	<meta property="og:description" content="Production-ready web applications with Next.js, TypeScript and PostgreSQL, from idea to deployment." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rishab.codes/" />
	<meta property="og:image" content="https://rishab.codes/projects/fieldwork-dashboard.webp" />
</svelte:head>

{@render children()}
