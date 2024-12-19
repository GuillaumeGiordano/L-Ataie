<script lang="ts">
	import { colorPick } from '$stores/color.store';
	import { isActiveBurger } from '$stores/navigation.store';

	interface Props {
		clickAction: ()=> void;
	}

	let { 
		clickAction 
	}: Props = $props();

	function handleClick(){
		clickAction();
	}

</script>

<button class="burger-container {$isActiveBurger && 'active'}" style="background-color: {$colorPick};" onclick={()=>handleClick()} aria-label="Button Burger" >
	<div class="burger-line line1"></div>
	<div class="burger-line line2"></div>
	<div class="burger-line line3"></div>
</button>

<style lang="css">
	.burger-container {
		z-index: 21;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 6px;
		border-radius: 4px;

	}

	.burger-line {
		background-color: white;
		width: 30px;
		height: 3px;
		border-radius: 2px;
		margin: 4px;
		transition: transform 0.3s ease;
	}

	.active .line1 {
		transform: rotate(-45deg) translate(-8px, 8px);
	}

	.active .line2 {
		opacity: 0;
	}

	.active .line3 {
		transform: rotate(45deg) translate(-8px, -8px);
	}
</style>
