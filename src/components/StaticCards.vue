<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="card card--first border-0 rounded-5 overflow-hidden">
		<img
			class="card-img-top w-100 h-100 object-fit-cover"
			src="@/assets/card-bg.jpg"
			alt="Card image cap"
			style="transform: scaleX(-1) scale(1.5); margin-left: -18%"
		/>
		<div class="card-img-overlay d-flex">
			<div class="input-group align-self-end align-items-center rounded-5">
				<input
					type="text"
					class="form-control position-relative z-0 py-3 ps-4 rounded-5"
					placeholder="Tap to import a prompt."
					aria-label="User answer"
					aria-describedby="button-addon2"
					:value="props.modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
					style="padding-right: 60px"
				/>
				<button
					class="btn btn-dark position-absolute end-0 me-1"
					type="button"
					id="button-addon2"
					style="border-radius: 50%; width: 50px; height: 50px"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					:disabled="props.modelValue.length === 0"
				>
					<i class="bi bi-arrow-right"></i>
				</button>
			</div>
		</div>
	</div>

	<div
		class="card card--second position-relative border-0 rounded-5 overflow-hidden"
	>
		<div class="card-body d-flex justify-content-center align-items-center">
			<div
				class="image position-absolute z-3 d-flex align-items-center justify-content-center bg-white"
				style="width: 100px; height: 100px; left: -50px; border-radius: 50%"
			>
				<img
					src="@/assets/logo.png"
					class="z-3"
					alt="Logo"
					style="width: 50px; height: 50px"
				/>
			</div>
			<h5 class="card-title mb-0 ms-5 text-white fw-light fs-6">
				Train your AI smarter
			</h5>
		</div>
	</div>

	<div class="card card--third border-0 rounded-5 overflow-hidden">
		<div class="card-header d-flex px-4 py-3">
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
		</div>
		<div class="card-body d-flex align-items-center px-4">
			<pre><code><span class="color-1">const</span> predictWeather =
(temperature) => {
  return temperature > 30 ? "<span class="color-2">Hot</span>" 
: "<span class="color-2">Cold</span>"; 
} 
<span class="color-1">console</span>.log(predictWeather(35))</code></pre>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	&--first {
		.card-img-overlay,
		.card-img-overlay:hover {
			background-color: unset;
		}

		.btn:disabled {
			background: black !important;
			opacity: 1;
		}
	}

	&--second {
		background-color: rgb(148, 140, 227);

		&::before,
		&::after {
			content: '';
			position: absolute;
			left: -76%;
			z-index: 1;
			width: 600px;
			height: 600px;
			border: 1px solid white;
			border-radius: 50%;
			opacity: 0.3;
		}

		&::before {
			bottom: -141%;

			@media (max-width: 430px) {
				bottom: -151%;
			}
		}

		&::after {
			top: -141%;

			@media (max-width: 430px) {
				top: -151%;
			}
		}

		.image {
			position: relative;

			&::before,
			&::after {
				content: '';
				position: absolute;
				border-radius: 50%;
				border: 2px solid rgba(255, 255, 255, 0.6);
				background-color: white;
				width: 100%;
				height: 100%;
				animation: pulse 3s infinite;
			}

			&::before {
				width: 150%;
				height: 150%;
				opacity: 0.2;
				box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
			}

			&::after {
				width: 250%;
				height: 250%;
				opacity: 0.1;
				animation: pulse 3s infinite;
			}

			@keyframes pulse {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(1.5);
				}
				100% {
					transform: scale(1);
				}
			}
		}
	}

	&--third {
		position: relative;
		width: 100%;
		max-width: 800px;
		background: rgb(33, 39, 60);
		color: #dcdcdc;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		font-family: 'Roboto Mono';

		.card-header {
			background: rgb(42, 49, 75);
			align-items: center;
			border-bottom: 1px solid #333;

			.dot {
				width: 12px;
				height: 12px;
				border-radius: 50%;
				background: rgb(60, 66, 89);
				margin-right: 10px;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		code,
		pre {
			font-family: 'Roboto Mono';
		}

		.card-body {
			pre {
				margin: 0;
				padding: 0;
				white-space: pre-wrap;
				overflow-x: auto;
			}

			code {
				display: block;
				color: rgb(252, 253, 252);
				font-size: 16px;
				line-height: 1.7;

				.color-1 {
					color: rgb(194, 183, 232);
				}

				.color-2 {
					color: rgb(222, 145, 204);
				}
			}
		}
	}
}
</style>
