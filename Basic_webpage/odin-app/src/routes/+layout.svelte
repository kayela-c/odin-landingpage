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


<AppShell slotSidebarLeft=" w-52 bg-surface-500/10 p-4 ">
	<svelte:fragment slot="header">
		
<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<strong><a href="/" class="logo">Header Brand Name</a></strong>
	<svelte:fragment slot="trail">
		<Avatar initials="JD" width="w-10" background="bg-primary-500" />
	</svelte:fragment>
</AppBar>

	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarLeft">
		
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<div class=" container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
