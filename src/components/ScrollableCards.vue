<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { getProducts } from '@/api/products'

import StaticCards from '@/components/StaticCards.vue'
import LoadedCards from '@/components/LoadedCards.vue'

const props = defineProps({
	modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const products = ref([])
const productsLimit = 9
const cardsPlaceholders = ref(Array.from({ length: productsLimit }))
const isLoaded = ref(false)

const handleUpdateUserAnswer = (newValue) => {
	emit('update:modelValue', newValue)
}

onMounted(async () => {
	try {
		products.value = await getProducts(productsLimit)

		products.value.forEach((product, index) => {
			cardsPlaceholders.value[index] = { ...product }
		})

		isLoaded.value = true
	} catch (error) {
		console.error('Failed to fetch products:', error)
	}
})
</script>

<template>
	<div class="card-container d-flex mb-5">
		<div
			class="card-container-scroll position-absolute start-0 d-flex w-100 gap-4 overflow-scroll"
		>
			<StaticCards
				:modelValue="props.modelValue"
				@update:modelValue="handleUpdateUserAnswer"
			/>

			<LoadedCards :products="cardsPlaceholders" :is-loaded="isLoaded" />
		</div>
	</div>
</template>

<style lang="scss">
.card-container {
	padding-bottom: 316px;
	overflow-x: auto;
	white-space: nowrap;

	@media (max-width: 430px) {
		margin-bottom: 20px !important;
		padding-bottom: 300px;
	}
}

.card-container-scroll {
	padding-left: 12rem;
	padding-right: 6rem;

	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1024px) {
		padding-left: 9rem;
		padding-right: 4rem;
	}

	@media (max-width: 768px) {
		padding-left: 4rem;
		padding-right: 3rem;
	}

	@media (max-width: 430px) {
		padding-left: 3rem;
		padding-right: 2rem;
	}
}

.card {
	aspect-ratio: 10 / 8;
	flex-shrink: 0;
	flex-basis: 395px;
	border-radius: 50px;
	font-family: 'Roboto Mono';
	border-radius: 8px;

	@media (max-width: 430px) {
		flex-basis: 375px;
		max-width: 100vw;
	}

	&:hover {
		.card-img-overlay {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	.card-img-overlay {
		font-family: 'Roboto';
		word-wrap: break-word;
		overflow-wrap: break-word;
		white-space: normal;
		transition: background-color 0.3s ease-in-out;
	}
}
</style>
