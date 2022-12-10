<script lang="ts">
	export let id: number;
	export let author: string;
	export let title: string;
	export let content: string;
	export let date: Date;
	export let category: string;
	export let tags: string[];
	export let timeToRead: number;
</script>

<div class="container pt-10 pb-10">
	<!-- header -->
	<div class="flex text-sm pb-4">
		<div class="pr-2">{author}</div>
		<div class="text-stone-600">{date}</div>
	</div>

	<!-- body -->
	<div class="flex items-center">
		<div>
			<div class="text-xl text-stone-900 font-bold pb-2">
				{title}
			</div>
			<div class="text-base pb-4 text-justify">
				{content}
			</div>
		</div>

		<div class="pl-8">
			<img
				class="article-image"
				src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
				alt="" />
		</div>
	</div>

	<!-- footer -->
	<div class="flex">
		<div class="pr-2">{category}</div>
		<div>{timeToRead}</div>
	</div>
</div>

<style>
	.article-image {
		min-width: 100px;
		width: 100px;
		height: auto;
	}
</style>
