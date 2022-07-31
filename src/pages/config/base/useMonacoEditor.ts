import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
// 引入语言支持
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// 引入搜索栏
import 'monaco-editor/esm/vs/editor/contrib/find/browser/findController.js';
import { onMounted, Ref, ref, watch } from 'vue';

// 可以选择引入默认的全局搜索 但是体积过大，这里暂时不用了
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';

interface IMonacoEditorResult {
  codeValue: Ref<string>;
}

/**
 * monacoEditor 处理
 */
export default (element: HTMLElement): IMonacoEditorResult => {
  // 生成的代码值
  const codeValue = ref<string>(" console.log('hello world')");

  const monacoInstance = monaco.editor.create(element, {
    value: codeValue.value,
    language: 'javascript', // 语言支持
    readOnly: false, // 只读
  });

  // 重新生成内容
  watch(codeValue, () => {
    console.log(codeValue.value);
    monacoInstance.setValue(codeValue.value);
  });

  // monacoInstance.dispose();//使用完成销毁实例
  // monacoInstance.setValue(codeValue.value); //设置最新的codeValue的值
  return {
    codeValue,
  };
};
