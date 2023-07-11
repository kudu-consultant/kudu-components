<script>
	import { Announcement } from '$lib'
</script>

<section class="p-6 min-h-screen">
	<div class="mb-8">
		<span class="inline-block mb-2">Announcement error</span>
		<Announcement type="error" extraclass="w-fit"
			>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Announcement
		>
	</div>
	<div class="mb-8">
		<span class="inline-block mb-2">Announcement md</span>
		<Announcement type="error" extraclass="w-fit" size="md"
			>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Announcement
		>
	</div>
	<div>
		<span class="inline-block mb-2">Announcement sm</span>
		<Announcement type="error" extraclass="w-fit" size="sm"
			>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Announcement
		>
	</div>
</section>
