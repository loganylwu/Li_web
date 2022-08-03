<template>

  <t-form
    ref="form"
    class="base-form"
    :data="formData"
    :rules="FORM_RULES"
    label-align="top"
    :label-width="100"
    @reset="onReset"
    @submit="onSubmit"
  >

    <div class="form-basic-container">

      <div class="form-basic-item">
        <h2>webpack配置项</h2>
        <!-- 表单内容 -->
        <t-row class="row-gap" :gutter="[16, 24]">
          <t-form-item label="css loaders" name="course">
            <t-checkbox-group
              v-model="formData.course">
              <t-checkbox v-for="cssLoader in cssLoaders" :key="cssLoader.id" :value="cssLoader.value">{{
                  cssLoader.text
                }}
              </t-checkbox>
            </t-checkbox-group>
          </t-form-item>
        </t-row>
      </div>
      <div id="codeView" class="form-basic-editor"></div>
    </div>
  </t-form>
</template>
<script lang="tsx">
export default {
  name: 'ConfigPage'
}
</script>
<script setup lang="tsx">
import {onMounted, reactive, ref, watch,} from 'vue';
import {MessagePlugin} from 'tdesign-vue-next';
import {FORM_RULES} from './constants';
import useMonacoEditor from '@/pages/config/base/useMonacoEditor';
import useASTCompiler from '@/pages/config/base/useASTCompiler';
import {useCssLoader} from "@/service/useCssLoader";


const formData = reactive({
  course: [],
  name: '',
  type: '',
  partyA: '',
  partyB: '',
  signDate: '',
  startDate: '',
  endDate: '',
  payment: '1',
  amount: 0,
  comment: '',
  files: [],
})


const {cssLoaders} = useCssLoader();

const onReset = () => {
  MessagePlugin.warning('取消新建');
};
const onSubmit = ({validateResult}) => {
  if (validateResult === true) {
    MessagePlugin.success('新建成功');
  }
};
const plugins = ref([]);
watch(formData, () => {
  plugins.value = formData.course;
});
onMounted(() => {
  const element = document.getElementById('codeView');
  const {codeValue} = useMonacoEditor(element);
  setTimeout(() => {
    const {computedCode} = useASTCompiler(plugins);
    codeValue.value = computedCode.value;
  }, 1000);
});
</script>

<style lang="less" scoped>
@import url('./index.less');
.t-form {
  height: 100%;
  .form-basic-container {
    height: 100%;
  }
}
</style>
