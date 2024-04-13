<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { AppBar, AppShell, Avatar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/component/Navigation.svelte';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>


<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		
<AppBar>
	<svelte:fragment slot="lead">
		<button type="button" class="md:hidden btn btn-icon mr-4 variant-filled-secondary">
			<span>
				<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
					<rect width="100" height="20"/>
					<rect y="30" width="100" height="20"/>
					<rect y="60" width="100" height="20"/>
				</svg>
			</span>
		</button>
	</svelte:fragment>
	<strong><a href="/" class="logo">Header Brand Name</a></strong>
	<svelte:fragment slot="trail">
		<Avatar initials="JD" width="w-10" background="bg-primary-500" />
	</svelte:fragment>
</AppBar>

	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<div class=" container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">
		<footer class="flex justify-center">
			<p>Copyright &copy; The Odin Project 2021</p>
		  </footer>
	</svelte:fragment>
</AppShell>
