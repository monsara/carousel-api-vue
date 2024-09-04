<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
	products: {
		type: Array,
		required: true,
		default: () => [],
	},
	isLoaded: {
		type: Boolean,
		required: true,
		default: false,
	},
})

const truncateText = (text, maxLength) => {
	return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}
</script>

<template>
	<div
		class="card justify-content-center align-items-center rounded-5 overflow-hidden"
		:class="{ 'bg-body-secondary': !isLoaded }"
		v-for="(product, index) in props.products"
		:key="index"
	>
		<div v-if="!props.isLoaded">
			<div class="spinner-border text-secondary" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
		<div class="h-100" v-else>
			<img
				:src="product.image"
				:alt="product.title"
				class="card-img product-image h-100 object-fit-contain"
			/>
			<div
				class="card-img-overlay d-flex flex-column align-items-center justify-content-center card-content p-2 text-white text-center"
			>
				<h2 class="card-title fs-5 fw-bold" :title="product.title">
					{{ truncateText(product.title, 30) }}
				</h2>
				<p class="card-text product-description" :title="product.description">
					{{ truncateText(product.description, 150) }}
				</p>
				<p class="card-text product-price">
					<strong>Price:</strong> ${{ product.price }}
				</p>
				<p class="card-text product-rating">
					<strong>Rating:</strong>
					{{ product.rating.rate }} ({{ product.rating.count }}
					reviews)
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
