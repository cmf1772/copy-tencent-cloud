<template>
  <div class="numtool">
    <div @click="less" :style="stepperCacheNum<=min?'color:'+unactive+';':'color:'+active+';'" class="stepperbtn stepperbtn1">-</div>
    <input type="number" :value="stepperCacheNum" @input="iptVal" :disabled="true" class="steppernumber"/>
    <div @click="add" :style="stepperCacheNum>=max?'color:'+unactive+';':'color:'+active+';'" class="stepperbtn stepperbtn2">+</div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				stepperNum: 0,
				stepperCacheNum: 0
			};
		},
		name: 'sunui-stepper',
		props: {
			val: {
				type: [Number],
				default: 0
			},
			min: {
				type: [String, Number],
				default: 0
			},
			max: {
				type: [String, Number],
				default: 0
			},
			step: {
				type: Number,
				default: 1
			},
			label: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			},
			active: {
				type: String,
				default: '#666'
			},
			unactive: {
				type: String,
				default: '#ddd'
			}
		},
		created() {
			this.stepperNum = this.val;
			this.stepperCacheNum = this.val;
		},
		watch: {
			val: function(val) {
				this.stepperNum = this.val;
			}
		},
		methods: {
			less() {
				this.stepperNum <= this.min ? this.stepperNum = this.min : this.stepperNum -= Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.label);
			},
			add() {
				this.stepperNum >= this.max ? this.stepperNum = this.max : this.stepperNum += Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.label);
			},
			emit(val, label) {
				if (Number(val.toFixed(1)) > this.max) {
					val = this.max;
					this.stepperCacheNum = this.max;
				}
				if (Number(val.toFixed(1)) < this.min) {
					val = this.min;
					this.stepperCacheNum = this.min;
				}
				this.$emit('change', {
					val: val,
					label: label
				});
			},
			iptVal(e) {
				// 暂未开发输入框->sunUI1.0.0,预计sunUI1.0.1
				Number(e.detail.value) > this.max ? this.stepperNum = this.max : this.stepperNum;
			}
		}
	}
</script>

<style>
.numtool{display:inline-block; float:right; font-size:14px;line-height:32px; color:#333;border:1px solid #eee;border-radius:2px; }
.numtool .steppernumber{border:none;height:30px; line-height:30px; float:left; text-align:center; font-size:14px; width:50px;-webkit-appearance: none;border-radius:0 !important;color:14px;font-weight:700;color:#000;}
.numtool .stepperbtn{ display:block; width:30px; height:30px; line-height:30px; float:left; text-align:center; font-size:18px; color:#333;border-left:;}
.numtool .stepperbtn1{border-right:1px solid #eee;}
.numtool .stepperbtn2{border-left:1px solid #eee;}
</style>
