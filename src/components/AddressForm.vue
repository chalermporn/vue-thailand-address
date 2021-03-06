<template lang="pug">
.typeahead-address-form
	.row
		.col
			input-container(
				:dataSource='dataSource',
				:data='subdistrict',
				target='district',
				:label='subdistrictLabel',
				@itemselect='onItemSelect'
			)
		.col
			input-container(
				:dataSource='dataSource',
				:data='district',
				target='amphoe',
				:label='districtLabel',
				@itemselect='onItemSelect'
			)
	.row
		.col
			input-container(
				:dataSource='dataSource',
				:data='province',
				target='province',
				:label='provinceLabel',
				@itemselect='onItemSelect'
			)
		.col
			input-container(
				:dataSource='dataSource',
				:data='zipcode',
				target='zipcode',
				:label='zipcodeLabel',
				@itemselect='onItemSelect'
			)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { loadDataSource } from '../lib/datasource-utils';
import { AddressFormModel } from '../lib/interfaces';
import InputContainer from './InputContainer.vue';

@Component({
	name: 'address-form',
	components: {
		InputContainer
	},
	model: {
		prop: 'value',
		event: 'itemselect'
	},
	props: {
		subdistrictLabel: {
			type: String,
			default: 'ตำบล/แขวง'
		},
		districtLabel: {
			type: String,
			default: 'อำเภอ/เขต'
		},
		provinceLabel: {
			type: String,
			default: 'จังหวัด'
		},
		zipcodeLabel: {
			type: String,
			default: 'รหัสไปรษณีย์'
		},
		value: {
			validator(value) {
				let hasOwnProperty = Object.prototype.hasOwnProperty;

				return (
					hasOwnProperty.call(value, 'district')
					&&
					hasOwnProperty.call(value, 'subdistrict')
					&&
					hasOwnProperty.call(value, 'province')
					&&
					hasOwnProperty.call(value, 'zipcode')
				);
			},
			default(): AddressFormModel {
				return {
					district: null,
					subdistrict: null,
					province: null,
					zipcode: null
				};
			}
		}
	},
	data() {
		return {
			dataSource: []
		};
	}
})
export default class AddressForm extends Vue {
	// Data
	dataSource: AddressEntry[];

	// Props
	subdistrictLabel: string;
	districtLabel: string;
	provinceLabel: string;
	zipcodeLabel: string;
	value: AddressFormModel

	// Hooks
	created() {
		this.dataSource = loadDataSource();
	}

	// Computed
	get subdistrict(): string {
		return this.value.subdistrict;
	}
	get district(): string {
		return this.value.district;
	}
	get province(): string {
		return this.value.province;
	}
	get zipcode(): string {
		return (typeof this.value.zipcode === 'number') ? this.value.zipcode.toString() : this.value.zipcode;
	}

	// Methods
	onItemSelect(item: AddressEntry) {
		let value: AddressFormModel = {
			district: item.amphoe,
			subdistrict: item.district,
			province: item.province,
			zipcode: item.zipcode
		}

		this.$emit('itemselect', value);
	}
}
</script>

<style lang="scss">
.typeahead-address-form {
	width: 100%;

	.row {
		display: block;

		&:not(:first-child) {
			margin-top: 20px;
		}
		.col {
			display: inline-block;
			width: 49%;

			&:not(:last-child) {
				margin-right: .5%;
			}
			&:not(:first-child) {
				margin-left: .5%;
			}
		}
	}
}
</style>
